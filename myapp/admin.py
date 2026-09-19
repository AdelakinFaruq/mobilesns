from django.contrib import admin
from .models import AirtimeTransaction


@admin.register(AirtimeTransaction)
class AirtimeTransactionAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'phone',
        'network',
        'amount',
        'account',
        'date',
    )

    list_filter = ('network', 'date')
    search_fields = ('name', 'phone', 'account')
