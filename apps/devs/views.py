from django.shortcuts import render, HttpResponse

# Create your views here.
def index(req):
    return render(req,'devs/register.html')

def login(req):
    return render(req,'devs/login.html')
