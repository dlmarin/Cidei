from django.db import models

# Create your models here.
L_TYPES = (
	('t', 'Para resolver'),
	('l', 'Para revisar'),
	('p', 'No resuelto'),
	)

Choice = (
	('u', 'unica'),
	('p', 'privada'),
	)

# Create your models here.
class Category(models.Model):
	name = models.CharField(max_length = 255)
	slug = models.SlugField(max_length = 255, unique = True)
	description = models.TextField()
	type_category = models.CharField(max_length=1, choices=Choice, default='u')
	posted_on = models.DateTimeField(auto_now_add = True)
	update_category = models.DateTimeField(auto_now = True)


	def __unicode__(self):
		return "%s - %s" % (self.name, self.slug)

class Item(models.Model):
	listing = models.CharField(max_length=1, choices=L_TYPES, default='t')
	name = models.CharField(max_length = 120)
	category = models.ForeignKey(Category)
	department = models.CharField(max_length = 255)
	description = models.TextField()
	posted_on = models.DateTimeField(auto_now_add = True)
	update_item = models.DateTimeField()

	def __unicode__(self):
		return "%s - %s" % (self.name, self.category)

class Pictures(models.Model):
	item = models.ForeignKey(Item)
	url = models.CharField(max_length=255)