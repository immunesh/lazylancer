from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import UserProfile, Project, Bid, ProjectOpportunity, Notification
from django.contrib.auth.models import User
from django.db.models import Count, Avg
from django.utils import timezone
from datetime import timedelta

# Create your views here.

@login_required
def profile_view(request):
    try:
        profile = request.user.profile
    except UserProfile.DoesNotExist:
        profile = UserProfile.objects.create(user=request.user)
    
    if request.method == 'POST':
        # Update user information
        user = request.user
        user.first_name = request.POST.get('first_name', user.first_name)
        user.last_name = request.POST.get('last_name', user.last_name)
        user.email = request.POST.get('email', user.email)
        user.save()

        # Update profile information
        profile.bio = request.POST.get('bio', profile.bio)
        profile.location = request.POST.get('location', profile.location)
        profile.website = request.POST.get('website', profile.website)
        profile.phone_number = request.POST.get('phone_number', profile.phone_number)
        
        if 'avatar' in request.FILES:
            profile.avatar = request.FILES['avatar']
        
        profile.save()
        messages.success(request, 'Profile updated successfully!')
        return redirect('dashboard:profile')

    context = {
        'profile': profile,
        'user': request.user
    }
    return render(request, 'dashboard/profile.html', context)

@login_required
def dashboard_view(request):
    # Get user's active bids
    active_bids = request.user.bids.filter(status='active').count()
    
    # Calculate success rate (completed successful bids / total completed bids)
    completed_bids = request.user.bids.filter(status__in=['completed', 'failed']).count()
    successful_bids = request.user.bids.filter(status='completed').count()
    success_rate = (successful_bids / completed_bids * 100) if completed_bids > 0 else 0
    
    # Get recent project opportunities
    recent_opportunities = ProjectOpportunity.objects.filter(
        is_active=True,
        created_at__gte=timezone.now() - timedelta(days=7)
    ).order_by('-created_at')[:5]
    
    # Get recent notifications
    notifications = request.user.notifications.filter(
        created_at__gte=timezone.now() - timedelta(days=7)
    ).order_by('-created_at')[:10]
    
    context = {
        'active_bids': active_bids,
        'success_rate': round(success_rate, 2),
        'recent_opportunities': recent_opportunities,
        'notifications': notifications,
    }
    return render(request, 'dashboard/dashboard.html', context)
