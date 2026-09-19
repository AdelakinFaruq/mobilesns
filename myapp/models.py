from django.db import models
from django.contrib.auth.models import User


class AirtimeTransaction(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="airtime_transactions",
        null=True,
        blank=True
    )

    network = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    account = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.network} - ₦{self.amount}"
