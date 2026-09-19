from django.urls import path
from . import views

urlpatterns = [

    path(
        "",
        views.register,
        name="register"
    ),

    path(
        "home/",
        views.index,
        name="index"
    ),

    path(
        "receipt/<int:transaction_id>/",
        views.receipt,
        name="receipt"
    ),

    path(
        "transaction-history/",
        views.transaction_history,
        name="transaction_history"
    ),

]
