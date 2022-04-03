from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Service, Area
from .serializers import ServicesSerializer
from geopy.distance import geodesic
import pgeocode

# Create your views here.
class ServicesView(APIView):
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request, format=None):
        services = Service.objects.all()
        servicesSerilizer = ServicesSerializer(services, many=True)

        return Response(servicesSerilizer.data)



# Handel GEO Location
class GeoLocationView(APIView):
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request, format=None):
        zipcode = request.data["zip"]
        inarea = False

        if zipcode.isnumeric():
            # Check if in area
            if Area.objects.filter(zipcode=zipcode).exists():
                inarea = True
            else:
                inarea = False
        else:
            inarea = False

        response = Response()
        response.data = {
            'inarea': inarea
        }
        return response