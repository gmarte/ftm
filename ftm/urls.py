from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="FTM API",
      default_version='v1',
      description="FTM API's",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="me@gmarte.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')), # oauth config
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path("", include("tasks.urls")),
    re_path('api/api.json/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path('api/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),   
]

# region res_auth.urls
# urlpatterns = [
#     # URLs that do not require a session or valid token
#     url(r'^password/reset/$', PasswordResetView.as_view(),
#         name='rest_password_reset'),
#     url(r'^password/reset/confirm/$', PasswordResetConfirmView.as_view(),
#         name='rest_password_reset_confirm'),
#     url(r'^login/$', LoginView.as_view(), name='rest_login'),
#     # URLs that require a user to be logged in with a valid session / token.
#     url(r'^logout/$', LogoutView.as_view(), name='rest_logout'),
#     url(r'^user/$', UserDetailsView.as_view(), name='rest_user_details'),
#     url(r'^password/change/$', PasswordChangeView.as_view(),
#         name='rest_password_change'),
# ]
# endregion

# region registration.urls
# urlpatterns = [
#     url(r'^$', RegisterView.as_view(), name='rest_register'),
#     url(r'^verify-email/$', VerifyEmailView.as_view(), name='rest_verify_email'),

#     # This url is used by django-allauth and empty TemplateView is
#     # defined just to allow reverse() call inside app, for example when email
#     # with verification link is being sent, then it's required to render email
#     # content.

#     # account_confirm_email - You should override this view to handle it in
#     # your API client somehow and then, send post to /verify-email/ endpoint
#     # with proper key.
#     # If you don't want to use API on that step, then just use ConfirmEmailView
#     # view from:
#     # django-allauth https://github.com/pennersr/django-allauth/blob/master/allauth/account/views.py
#     url(r'^account-confirm-email/(?P<key>[-:\w]+)/$', TemplateView.as_view(),
#         name='account_confirm_email'),
# ]
# endregion