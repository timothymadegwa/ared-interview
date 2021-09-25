from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()

router.register("sample", SampleViewSet, basename="sample")
router.register("tasks", TasksViewSet, basename="tasks")

urlpatterns = [
    path("", include(router.urls)),   
]