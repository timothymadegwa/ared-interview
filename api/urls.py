from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()

router.register("sample", SampleViewSet, basename="sample")

urlpatterns = [
    path("", include(router.urls)),   
]