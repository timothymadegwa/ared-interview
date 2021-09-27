from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
import random

# Create your views here.
global colours 
servers = 0
colours = ["white", "lightgreen", "green", "red", "blue", "aqua","cyan","darkgray","greenyellow", "lightblue", "linen", "mediumpurple", "moccasin",
            "orange", "pink", "skyblue", "tan"]


class StartViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        colour = random.choice(colours)
        number_of_servers = random.randint(10,20)
        global servers
        servers+= number_of_servers
        return Response({'colour': colour, 'servers': number_of_servers})

class StopViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        colour = random.choice(colours)
        global servers
        number_of_servers = random.randint(5,servers)
        
        servers-=number_of_servers
        return Response({'colour': colour, 'servers': number_of_servers})

class ReportViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        colour = random.choice(colours)
        print(current_colour)
        return Response({'colour': colour, 'servers': servers})