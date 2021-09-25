from django.shortcuts import render
# from rest_framework.authentication import RemoteUserAuthentication, SessionAuthentication, TokenAuthentication
# from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, NotAcceptable
from rest_framework import status

# Create your views here.

class SampleViewSet(ViewSet):
    
    def list(self, request):
        return Response({'status': 'List router'})

    def create(self, request):
        return Response({'status': 'create router'})

    def retrieve(self, request, pk=None):
        return Response({'status': 'retrieve router'})

    def update(self, request, pk=None):
        return Response({'status': 'update router'})
    
    def partial_update(self, request, pk=None):
        return Response({'status': 'patial update router'})

    def destroy(self, request, pk=None):
        return Response({'status': 'destroy router'})

class TasksViewSet(ViewSet):
    def list(self, request):
        return Response({'status': 'List router'})