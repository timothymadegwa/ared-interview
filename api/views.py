from django.shortcuts import render
# from rest_framework.authentication import RemoteUserAuthentication, SessionAuthentication, TokenAuthentication
# from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, NotAcceptable
from rest_framework import status

import random

# Create your views here.
global colours 
colours = ["white", "lightgreen", "green", "red", "blue", "aqua","cyan","darkgray","greenyellow", "lightblue", "linen", "mediumpurple", "moccasin",
            "orange", "pink", "skyblue", "tan"]


class StartViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        colour = random.choice(colours)
        print(current_colour)
        return Response({'colour': colour})

class StopViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        colour = random.choice(colours)
        print(current_colour)
        return Response({'colour': colour})

class ReportViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        colour = random.choice(colours)
        print(current_colour)
        return Response({'colour': colour})