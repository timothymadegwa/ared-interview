from .jobs import start_server, stop_server, server_report
from apscheduler.schedulers.background import BackgroundScheduler

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(start_server, 'interval', seconds=30, id='start_server')
    scheduler.add_job(stop_server, 'interval', seconds=40, id='stop_server')
    scheduler.add_job(server_report, 'interval', seconds=50, id='server_report')
    scheduler.start()