from django.contrib import admin
from .models import User, Child, Task, Reward, Badge, ChildBadge

# Register your models here.
admin.site.register(User)
admin.site.register(Child)
admin.site.register(Task)
admin.site.register(Reward)
admin.site.register(Badge)
admin.site.register(ChildBadge)