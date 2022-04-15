from django.contrib import admin
from .models import Service, Area, Appointment

# Register your models here.
admin.site.register(Service)
admin.site.register(Area)
admin.site.register(Appointment)