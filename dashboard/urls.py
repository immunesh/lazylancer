from django.urls import path
from . import views

app_name = 'dashboard'

urlpatterns = [
    path('profile/', views.profile_view, name='profile'),
] 