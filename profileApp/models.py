from django.db import models
from django.contrib.auth.models import AbstractUser

GENDER_CHOICES = (
                ('male', 'MALE'),
                ('female', 'FEMALE'),
                )

GENDER_PREFERENCE = (
                ('male', 'MALE'),
                ('female', 'FEMALE'),
                ('both', 'BOTH')
                )


HEAD_OPTIONS = (
                ('1', '1')
                )

HAIR_OPTIONS = (
                ('1', '1'),
                ('2', '2'),
                ('3', '3'),
                ('4', '4'),
                ('5', '5'),
                ('6', '6'),
                ('7', '7'),
                ('8', '8'),
                ('9', '9'),
                ('10', '10'),
                ('11', '11')
                )

EYES_OPTIONS = (
                ('1', '1'),
                ('2', '2'),
                ('3', '3'),
                ('4', '4'),
                ('5', '5'),
                ('6', '6'),
                )

EYEBROWS_OPTIONS = (
                ('1', '1'),
                ('2', '2'),
                ('3', '3'),
                ('4', '4'),
                ('5', '5'),
                ('6', '6'),
                ('7', '7')
                )

NOSE_OPTIONS = (
                ('1', '1'),
                ('2', '2'),
                ('3', '3'),
                ('4', '4'),
                ('5', '5'),
                ('6', '6'),
                ('7', '7'),
                ('8', '8'),
                ('9', '9'),
                ('10', '10'),
                ('11', '11'),
                ('12', '12')
                )

MOUTH_OPTIONS = (
                ('1', '1'),
                ('2', '2'),
                ('3', '3'),
                ('4', '4'),
                ('5', '5'),
                ('6', '6'),
                ('7', '7'),
                ('8', '8'),
                ('9', '9'),
                ('10', '10'),
                ('11', '11'),
                ('12', '12'),
                ('13', '13'),
                ('14', '14')
                )

# Create your models here.
class CustomUser(AbstractUser):
    gender = models.CharField(choices=GENDER_CHOICES, default='male',max_length=30)
    gender_preference = models.CharField(choices=GENDER_PREFERENCE, default='female',max_length=30)
    avatar_head = models.CharField(blank = True, max_length=30)
    avatar_hair = models.CharField(choices=HAIR_OPTIONS,blank = True, max_length=30)
    avatar_eyes = models.CharField(choices=EYES_OPTIONS,blank = True, max_length=30)
    avatar_eyebrows = models.CharField(choices=EYEBROWS_OPTIONS,blank = True, max_length=30)
    avatar_nose = models.CharField(choices=NOSE_OPTIONS,blank = True, max_length=30)
    avatar_mouth = models.CharField(choices=MOUTH_OPTIONS,blank = True, max_length=30)
    profile_pic = models.ImageField(upload_to = 'profile_pics', blank=True)


    def __str__(self):
        return self.username
