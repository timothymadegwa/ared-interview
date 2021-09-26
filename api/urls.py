from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()

router.register("start_server", StartViewSet, basename="start_server")
router.register("stop_server", StopViewSet, basename="stop_server")
router.register("report", ReportViewSet, basename="report")

urlpatterns = [
    path("/", include(router.urls)),   
]