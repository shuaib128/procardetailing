from rest_framework import serializers
from .models import Service


# Services serilizer
class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'image'
        )
        model = Service