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
from rest_framework import generics
from .models import Task, Child, Badge, Reward
from .serializers import ChildSerializer
#region Google
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
# endregion Google

# region Task

# endregion Task

# region Child
class ChildList(generics.ListCreateAPIView):
    queryset = Child.objects.all()
    serializer_class = ChildSerializer

    def get_queryset(self):
        return Child.objects.filter(parent=self.request.user)
    def create(self, request, *args, **kwargs):
        request.data['parent'] = request.user.pk
        return super().create(request, *args, **kwargs)
class ChildDetail(generics.RetrieveAPIView):
    queryset = Child.objects.all()
    serializer_class = ChildSerializer

    def get_queryset(self):
        return Child.objects.filter(parent=self.request.user)
class ChildDelete(generics.DestroyAPIView):
    pass
# endregion Child