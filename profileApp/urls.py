from django.conf.urls import url
from django.contrib.auth import views as auth_views
from . import views

app_name = 'profileApp'

urlpatterns = [
    url(r'login/$',auth_views.LoginView.as_view(template_name='profileApp/login.html'),name='login'),
    url(r'logout/$',auth_views.LogoutView.as_view(),name='logout'),
    url(r'signup/$',views.SignUp.as_view(),name='signup'),
    url(r'editSettings/(?P<pk>\d+)/$',views.EditSettings.as_view(),name='editsettings'),
    url(r'avatar/(?P<pk>\d+)/$',views.EditAvatar.as_view(),name='editavatar'),
]
