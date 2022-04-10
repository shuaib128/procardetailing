from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Service, Area
from .serializers import ServicesSerializer
import json

# Square API
from square.client import Client 
client = Client(
  access_token="EAAAEPlouGfKhpoQ8NAZe2gVRSBteNDI0hN_TOtMMwTQDpSxtcen3By4e3IHIDOm",
  environment="sandbox"
)

# Create your views here.
class ServicesView(APIView):
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request, format=None):
        # Get catalogs from squre
        catalog = None
        result_catalog = client.catalog.list_catalog()
        if result_catalog.is_success():
            catalog = result_catalog.body
        elif result_catalog.is_error():
            catalog = result_catalog.errors

        #Get 

        # Get services images from django
        services = Service.objects.all()
        servicesSerilizer = ServicesSerializer(services, many=True)
        
        response = Response()
        response.data = {
            'catalog': catalog,
            'services': servicesSerilizer.data
        }
        return response



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



# Booking View
class BookingView(APIView):
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request, format=None):
        #Client Message
        data = request.data["data"]
        varition_data = json.loads(request.data["variation_datas"])


        # Appoentment information
        appertment_condetion = "Apartment available for work" if data["Appertment"] == 'true' else "Apartment not available for work"
        mold_ondetion = "Car has mold" if data["Mold"] == 'true' else "Car has no mold"
        hair_condetion = "Car has pet hair" if data["PetHair"] == 'true' else "Car has no pet hair"
        car = data["Car"]
        car_condetion = "Car condetion: Bad" if data["Bad"] == 'true' else "Car condetion: Good" if data["Good"] == 'true' else "Car condetion: Excellent"
        seller_note = f"{appertment_condetion}\n {mold_ondetion}\n {hair_condetion}\n {car}\n {car_condetion}"

        #Booking data
        result = client.bookings.create_booking(
        body = {
            "booking": {
            "start_at": data["date"],
            "location_id": "L7RNA484FAVSC",
            "customer_id": "VDS4VQH6GWYAKC4SQMMEHYVJX4",
            "customer_note": data["user_message"],
            "seller_note": seller_note,
            "appointment_segments": [
                {
                "duration_minutes": 45,
                "service_variation_id": varition_data["id"],
                "team_member_id": "TMXtylOGwWaaZe3E",
                "service_variation_version": varition_data["version"]
                }
            ]
            }
        }
        )

        if result.is_success():
            print(result.body)
        elif result.is_error():
            print(result.errors)

        response = Response()
        response.data = {
            'inarea': "inarea"
        }
        return response