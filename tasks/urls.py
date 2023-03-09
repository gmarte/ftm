
from django.urls import path, include,re_path
from . import views
from .views import GoogleLogin, ChildList
from django.contrib.auth.decorators import login_required


urlpatterns = [
    # path("", views.index, name="index"),    
    path('api/google/', GoogleLogin.as_view(), name='google_login'),
    path('child/list/', ChildList.as_view(), name='child_list')
]