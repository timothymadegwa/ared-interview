from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .models import Session, Report
import random
from datetime import date, datetime


global colours 
servers = 0
colours = ["white", "lightgreen", "green", "red", "blue", "aqua","cyan","darkgray","greenyellow", "lightblue", "linen", "mediumpurple", "moccasin",
            "orange", "pink", "skyblue", "tan"]

class StartSessionViewSet(ViewSet):
    def create(self, request):
        global servers
        servers = 0
        current_time = request.data.get("current_time")
        current_time = datetime.fromtimestamp(current_time/1000.0)
        current_session = Session(date=current_time)
        current_session.save()
        print("session started")
        return Response({'status': 'Session Started', 'session_id': current_session.id})

class StartViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        current_time = request.data.get("current_time")
        session_id = request.data.get("session_id")
        current_time = datetime.fromtimestamp(current_time/1000.0)
        number_of_servers = random.randint(10,20)
        global servers
        servers+= number_of_servers
        session_id = get_object_or_404(Session, id=int(session_id))
        report = Report(session_id = session_id, program_time = current_time, event = "START", 
                        display_message = f"{current_time} - start {number_of_servers} servers")
        report.save()
        colour = random.choice(colours)
        
        return Response({'colour': colour, 'servers': number_of_servers})

class StopViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        current_time = request.data.get("current_time")
        current_time = datetime.fromtimestamp(current_time/1000.0)
        session_id = request.data.get("session_id")
        colour = random.choice(colours)
        global servers
        number_of_servers = random.randint(5,servers)
        servers-=number_of_servers
        session_id = get_object_or_404(Session, id=int(session_id))
        report = Report(session_id = session_id, program_time = current_time, event = "STOP", 
                        display_message = f"{current_time} - stop {number_of_servers} servers")
        report.save()
        return Response({'colour': colour, 'servers': number_of_servers})

class StatusViewSet(ViewSet):
    def create(self, request):
        current_colour = request.data.get("current_colour")
        current_time = request.data.get("current_time")
        session_id = request.data.get("session_id")
        current_time = datetime.fromtimestamp(current_time/1000.0)
        colour = random.choice(colours)
        session_id = get_object_or_404(Session, id=int(session_id))
        report = Report(session_id = session_id, program_time = current_time, event = "REPORT", 
                        display_message = f"{current_time} - report {servers} servers running")
        report.save()
        return Response({'colour': colour, 'servers': servers})