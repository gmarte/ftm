from rest_framework.test import APITestCase
from django.urls import reverse

class TestSetUp(APITestCase):
    def setUp(self):
        self.register_url= reverse('rest_register')
        self.login_url = reverse('rest_login')
        self.password_reset_url = reverse('rest_password_reset')
        self.password_reset_confirm_url = reverse('rest_password_reset_confirm')
        self.logout_url = reverse('rest_logout')
        self.user_details_url = reverse('rest_user_details')
        self.rest_password_change_url = reverse('rest_password_change')
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

        self.user_data = {
            "username": "gizzy",
            "password": "gizzy123",
            "password1": "gizzy123",
            "password2": "gizzy123",
            "email": "sJN8UgPRPpgInL@sLxszDPLkLlbrvvwgQPAdZVbmeMw.slbb"
        }
        return super().setUp()
    def tearDown(self):
        return super().tearDown
