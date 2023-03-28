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
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from dj_rest_auth.social_serializers import TwitterLoginSerializer
from rest_auth.registration.views import SocialLoginView
from rest_framework import generics
from .models import Task, Child, Badge, Reward
from .serializers import ChildSerializer
from rest_framework.permissions import IsAuthenticated

#region Google
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
# endregion Google
#region Facebook
class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
#endregion Facebook

#region Twitter
class TwitterLogin(SocialLoginView):
    serializer_class = TwitterLoginSerializer
    adapter_class = TwitterOAuthAdapter
#endregion Twitter

# region Task

# endregion Task

# region Child
class ChildList(generics.ListCreateAPIView):
    queryset = Child.objects.all()
    serializer_class = ChildSerializer
    permission_classes = (IsAuthenticated,)
    def get_queryset(self):        
        return Child.objects.filter(parent=self.request.user)    
    def create(self, request, *args, **kwargs):
        request.data['parent'] = request.user.pk
        return super().create(request, *args, **kwargs)
class ChildDetail(generics.RetrieveUpdateAPIView):
    queryset = Child.objects.all()
    serializer_class = ChildSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Child.objects.filter(parent=self.request.user)    

class ChildDelete(generics.DestroyAPIView):
    queryset = Child.objects.all()
    serializer_class = ChildSerializer
    permission_classes = [IsAuthenticated]
# endregion Child

# region Task

# endregion Task