from django.urls import path
from .views import (ServicesView, GeoLocationView)

urlpatterns = [
    path('', ServicesView.as_view()),
    path('/geolocation', GeoLocationView.as_view())
]