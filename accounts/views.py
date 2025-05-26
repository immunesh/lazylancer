from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import login
from .forms import UserRegistrationForm
from .models import EmailVerificationToken
from django.http import Http404

# Create your views here.

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Create verification token
            token = EmailVerificationToken.objects.create(user=user)
            
            # Send verification email
            verification_url = f"{request.scheme}://{request.get_host()}/verify-email/{token.token}"
            send_mail(
                'Verify your email',
                f'Please click the following link to verify your email: {verification_url}',
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )
            messages.success(request, 'Registration successful. Please check your email to verify your account.')
            return redirect('login')
    else:
        form = UserRegistrationForm()
    return render(request, 'accounts/register.html', {'form': form})

def verify_email(request, token):
    try:
        verification = EmailVerificationToken.objects.get(token=token)
        user = verification.user
        user.is_active = True
        user.save()
        verification.delete()
        messages.success(request, 'Email verified successfully. You can now login.')
        return redirect('login')
    except EmailVerificationToken.DoesNotExist:
        raise Http404("Invalid verification token")
