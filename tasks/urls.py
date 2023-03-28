
from django.urls import path, include,re_path
from . import views
from .views import GoogleLogin, ChildList, ChildDetail, TwitterLogin, FacebookLogin, ChildDelete
from django.contrib.auth.decorators import login_required

app_name = 'tasks'

urlpatterns = [
    # path("", views.index, name="index"),
    path('api/google/', GoogleLogin.as_view(), name='google_login'),
    path('api/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('api/twitter/', TwitterLogin.as_view(), name='twitter_login'),
    #child
    path('api/child/', ChildList.as_view(), name='child_list'),
    path('api/child/<int:pk>/', ChildDetail.as_view(), name='child_detail'),
    path('api/child/<int:pk>/delete/', ChildDelete.as_view(), name='child_delete'),
]