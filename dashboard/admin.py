from django.contrib import admin
from .models import UserProfile, Project, Bid, ProjectOpportunity, Notification

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'location', 'phone_number')
    search_fields = ('user__username', 'user__email', 'location')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'client', 'budget', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('title', 'description', 'client__username')

@admin.register(Bid)
class BidAdmin(admin.ModelAdmin):
    list_display = ('project', 'freelancer', 'amount', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('project__title', 'freelancer__username', 'proposal')

@admin.register(ProjectOpportunity)
class ProjectOpportunityAdmin(admin.ModelAdmin):
    list_display = ('title', 'budget_range', 'created_at', 'expires_at', 'is_active')
    list_filter = ('is_active', 'created_at')
    search_fields = ('title', 'description', 'skills_required')

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'notification_type', 'is_read', 'created_at')
    list_filter = ('notification_type', 'is_read', 'created_at')
    search_fields = ('user__username', 'message')
