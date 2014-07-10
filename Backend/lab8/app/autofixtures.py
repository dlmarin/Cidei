from app.models import Category, Item
from autofixture import generators, register, AutoFixture

import random

nouns = ("Electrodomésticos", "Celulares", "Accesorios", "Cables", "Apps",)
nounsItem = ("celular", "nevera", "televisor", "Manos libres", "Hdmi",)
depart = ("Mantenimiento", "Reparación", "Garantía")

class CategoryFixture(AutoFixture):
	field_values = {
	'name' : generators.random.choice(nouns),
	'slug' : generators.SlugGenerator('para generar random'),
	}

register(Category, CategoryFixture)

class ItemFixture(AutoFixture):
	field_values = {
	'name' : generators.random.choice(nounsItem),
	'department' : generators.random.choice(depart),
	'description' : generators.SlugGenerator('descripcion'),
	'update_item' : generators.DateTimeGenerator(),
	}