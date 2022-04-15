from rest_framework import serializers
from .models import Service, Appointment


# Services serilizer
class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'image'
        )
        model = Service


# Appointment serilizer
class AppointentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'date',
        )
        model = Appointment