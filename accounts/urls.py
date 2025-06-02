from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('verify-email/<uuid:token>/', views.verify_email, name='verify_email'),
    path('login/', auth_views.LoginView.as_view(template_name='account-signin.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='main'), name='logout'),
] 