from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.urls import reverse
from django.conf import settings
from .models import User
import json
import requests

#region Google
def google_oauth(request):
    if request.method == 'GET':
        code = request.GET.get('code', '')
        if code:
            params = {
                'code': code,
                'client_id': settings.GOOGLE_OAUTH2_CLIENT_ID,
                'client_secret': settings.GOOGLE_OAUTH2_CLIENT_SECRET,
                'redirect_uri': request.build_absolute_uri(reverse('google_oauth')),
                'grant_type': 'authorization_code'
            }
            r = requests.post('https://oauth2.googleapis.com/token', data=params)
            if r.status_code == 200:
                response = json.loads(r.text)
                access_token = response['access_token']
                headers = {'Authorization': 'Bearer ' + access_token}
                r = requests.get('https://www.googleapis.com/oauth2/v1/userinfo', headers=headers)
                if r.status_code == 200:
                    google_user = json.loads(r.text)
                    email = google_user['email']
                    try:
                        user = User.objects.get(email=email)
                    except User.DoesNotExist:
                        user = User.objects.create_user(username=email, email=email)
                    user = authenticate(username=user.username, password=None)
                    login(request, user)
                    return redirect('index')
                else:
                    messages.error(request, 'Failed to fetch user information from Google.')
            else:
                messages.error(request, 'Failed to retrieve access token from Google.')
        else:
            messages.error(request, 'No code provided by Google.')
    return redirect('index')
# endregion Google

# region User
def login_view(request):
    if request.method == "POST":
        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            return render(request, "promise_tracker/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "tasks/login.html")


def logout_view(request):
    logout(request)
    return redirect('index')


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "tasks/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "tasks/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return redirect("index")
    else:
        return render(request, "promise_tracker/register.html")
# endregion

# Create your views here.
def index(request):
    return render(request, "tasks/index.html", {})