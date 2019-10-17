from django.shortcuts import render
from django.core.urlresolvers import reverse_lazy
from django.views.generic import CreateView, UpdateView
from . import models

from . import forms
# Create your views here.
class SignUp(CreateView):
    form_class = forms.CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'profileApp/signup.html'

class EditSettings(UpdateView):
    model = models.CustomUser
    fields = ('gender_preference',)
    template_name = 'profileApp/editSettings.html'
    success_url = reverse_lazy('home')

class EditAvatar(UpdateView):
    model = models.CustomUser
    fields = ('gender', 'avatar_head', 'avatar_hair', 'avatar_eyes',
                'avatar_eyebrows', 'avatar_nose', 'avatar_mouth', 'avatar_head',)
    template_name = 'profileApp/avatar.html'
    success_url = reverse_lazy('home')
