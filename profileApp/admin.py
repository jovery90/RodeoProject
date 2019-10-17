from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['username','email']
    fieldsets = UserAdmin.fieldsets + ( (None, {'fields': ('gender', 'gender_preference', 'profile_pic',
                                        'avatar_head', 'avatar_hair', 'avatar_eyes',
                                         'avatar_eyebrows', 'avatar_nose', 'avatar_mouth',)}), )
admin.site.register(CustomUser, CustomUserAdmin)
