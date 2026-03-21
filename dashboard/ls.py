from django.urls import path
from . import views

app_name = 'dashboard'

urlpatterns = [
    path('profile/', views.profile_view, name='profile'),
    path('', views.dashboard_view, name='dashboard'),
    path('notifications/', views.notifications_view, name='notifications'),
    path('notifications/mark_all_read/', views.mark_all_notifications_as_read, name='mark_all_notifications_as_read'),
] 