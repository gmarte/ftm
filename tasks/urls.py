
from django.urls import path, include,re_path
from . import views
from .views import GoogleLogin, ChildList, TwitterLogin, FacebookLogin
from django.contrib.auth.decorators import login_required


urlpatterns = [
    # path("", views.index, name="index"),    
    path('api/google/', GoogleLogin.as_view(), name='google_login'),
    path('api/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('api/twitter/', TwitterLogin.as_view(), name='twitter_login'),
    path('api/child/', ChildList.as_view(), name='child_list'),
]