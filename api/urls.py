from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()

router.register("start_session", StartSessionViewSet, basename="start_session")
router.register("start_server", StartViewSet, basename="start_server")
router.register("stop_server", StopViewSet, basename="stop_server")
router.register("status", StatusViewSet, basename="status")

urlpatterns = [
    path("/", include(router.urls)),   
]