from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from dashboard.models import Project, Bid, ProjectOpportunity, Notification
from django.utils import timezone
from datetime import timedelta

class Command(BaseCommand):
    help = 'Creates sample data for testing the dashboard'

    def handle(self, *args, **kwargs):
        # Create a test user if it doesn't exist
        user, created = User.objects.get_or_create(
            username='testuser',
            defaults={
                'email': 'test@example.com',
                'is_active': True
            }
        )
        if created:
            user.set_password('testpass123')
            user.save()
            self.stdout.write(self.style.SUCCESS('Created test user'))

        # Create sample projects
        projects = []
        for i in range(5):
            project = Project.objects.create(
                title=f'Test Project {i+1}',
                description=f'This is a test project {i+1} description',
                client=user,
                budget=1000.00,
                deadline=timezone.now() + timedelta(days=30),
                status='open'
            )
            projects.append(project)
            self.stdout.write(self.style.SUCCESS(f'Created project: {project.title}'))

        # Create sample bids
        bid_statuses = ['active', 'completed', 'failed']
        for i, project in enumerate(projects):
            status = bid_statuses[i % len(bid_statuses)]
            bid = Bid.objects.create(
                project=project,
                freelancer=user,
                amount=900.00,
                proposal=f'This is a test proposal for {project.title}',
                status=status
            )
            self.stdout.write(self.style.SUCCESS(f'Created bid: {bid}'))

        # Create sample project opportunities
        for i in range(5):
            opportunity = ProjectOpportunity.objects.create(
                title=f'Test Opportunity {i+1}',
                description=f'This is a test opportunity {i+1} description',
                budget_range='$500-$1000',
                skills_required='Python, Django, React',
                created_by=user,
                expires_at=timezone.now() + timedelta(days=30),
                is_active=True
            )
            self.stdout.write(self.style.SUCCESS(f'Created opportunity: {opportunity.title}'))

        # Create sample notifications
        notification_types = ['bid_accepted', 'bid_rejected', 'project_completed', 'new_message']
        for i in range(5):
            notification = Notification.objects.create(
                user=user,
                notification_type=notification_types[i % len(notification_types)],
                message=f'This is a test notification {i+1}',
                is_read=False
            )
            self.stdout.write(self.style.SUCCESS(f'Created notification: {notification}'))

        self.stdout.write(self.style.SUCCESS('Successfully created sample data')) 