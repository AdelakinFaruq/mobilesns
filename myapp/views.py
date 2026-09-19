from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.db.models import Sum

from .models import AirtimeTransaction


def register(request):

    if request.method == "POST":

        form = UserCreationForm(request.POST)

        if form.is_valid():

            form.save()

            return redirect("login")

    else:

        form = UserCreationForm()

    return render(
        request,
        "registration/register.html",
        {"form": form}
    )


@login_required
def index(request):

    if request.method == "POST":

        network = request.POST.get("network")
        name = request.POST.get("name")
        phone = request.POST.get("phone")
        amount = request.POST.get("amount")
        account = request.POST.get("account")

        transaction = AirtimeTransaction.objects.create(
            user=request.user,
            network=network,
            name=name,
            phone=phone,
            amount=amount,
            account=account
        )

        return redirect(
            "receipt",
            transaction_id=transaction.id
        )

    transactions = AirtimeTransaction.objects.filter(
        user=request.user
    ).order_by("-date")

    total_transactions = transactions.count()

    total_amount = transactions.aggregate(
        total=Sum("amount")
    )["total"] or 0

    latest_transaction = transactions.first()

    context = {

        "transactions": transactions[:5],

        "total_transactions":
            total_transactions,

        "total_amount":
            total_amount,

        "latest_transaction":
            latest_transaction,

    }

    return render(
        request,
        "index.html",
        context
    )


@login_required
def receipt(request, transaction_id):

    transaction = get_object_or_404(
        AirtimeTransaction,
        id=transaction_id,
        user=request.user
    )

    return render(
        request,
        "receipt.html",
        {
            "transaction": transaction
        }
    )


@login_required
def transaction_history(request):

    transactions = AirtimeTransaction.objects.filter(
        user=request.user
    ).order_by("-date")

    return render(
        request,
        "transaction_history.html",
        {
            "transactions": transactions
        }
    )
