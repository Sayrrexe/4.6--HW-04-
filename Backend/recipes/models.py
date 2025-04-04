from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Recipe(models.Model):
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    def __str__(self):
        return self.title
