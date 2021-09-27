from django.db import models
from django.utils import timezone

# Create your models here.
EVENT_CHOICES = (
    ('START', 'START'),
    ('STOP', 'STOP'),
    ('REPORT', 'REPORT'),
)
class Session(models.Model):
    date = models.DateTimeField(blank=False, null=False, default=timezone.now)

    def __str__(self):
        return self.id

class Report(models.Model):
    session_id = models.ForeignKey(Session, on_delete=models.CASCADE)
    program_time = models.DateField(blank=False, null=False)
    event = models.CharField(max_length=20, blank=False, null=False, choices=EVENT_CHOICES)
    message = models.CharField(max_length=250, blank=False, null=False)
    actual_time = models.DateField(blank=False, null=False, default=timezone.now)
    display_message = models.CharField(max_length=250, blank=False, null=False)

    def __str__(self):
        return self.session_id