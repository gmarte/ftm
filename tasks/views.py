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
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

#region Google
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
# endregion Google

# # region User
# def login_view(request):
#     if request.method == "POST":
#         # Attempt to sign user in
#         username = request.POST["username"]
#         password = request.POST["password"]
#         user = authenticate(request, username=username, password=password)

#         # Check if authentication successful
#         if user is not None:
#             login(request, user)
#             return redirect('index')
#         else:
#             return render(request, "promise_tracker/login.html", {
#                 "message": "Invalid username and/or password."
#             })
#     else:
#         return render(request, "tasks/login.html")


# def logout_view(request):
#     logout(request)
#     return redirect('index')


# def register(request):
#     if request.method == "POST":
#         username = request.POST["username"]
#         email = request.POST["email"]

#         # Ensure password matches confirmation
#         password = request.POST["password"]
#         confirmation = request.POST["confirmation"]
#         if password != confirmation:
#             return render(request, "tasks/register.html", {
#                 "message": "Passwords must match."
#             })

#         # Attempt to create new user
#         try:
#             user = User.objects.create_user(username, email, password)
#             user.save()
#         except IntegrityError:
#             return render(request, "tasks/register.html", {
#                 "message": "Username already taken."
#             })
#         login(request, user)
#         return redirect("index")
#     else:
#         return render(request, "promise_tracker/register.html")
# # endregion

# Create your views here.
def index(request):
    return render(request, "tasks/index.html", {})