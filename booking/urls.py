from django.urls import path
from .views import (ServicesView, GeoLocationView, BookingView)

urlpatterns = [
    path('', ServicesView.as_view()),
    path('/geolocation', GeoLocationView.as_view()),
    path('/book', BookingView.as_view()),
]