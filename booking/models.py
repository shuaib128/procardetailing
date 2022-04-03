from django.db import models
from djmoney.models.fields import MoneyField

# Create your models here.
class Service(models.Model):
    name = models.CharField(max_length=1000, default="name")
    price = MoneyField(decimal_places=2, default=0, default_currency='USD', max_digits=11)
    body = models.TextField()
    image = models.ImageField(null=True, blank=True, upload_to='media/ServiceImage')

    def __str__(self):
        return self.name



# Restriced Areas
class Area(models.Model):
    name = models.CharField(max_length=1000, default="name")
    zipcode = models.IntegerField(default=98208)

    def __str__(self):
        return f"{self.name}-{self.zipcode}"