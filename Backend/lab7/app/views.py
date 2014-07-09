from django.shortcuts import render_to_response, get_object_or_404, HttpResponseRedirect
from django.template import Context, RequestContext
from app.models import Item
from app.models import Category
from app.forms import ItemForm, CategoryForm
#Modulo serializador de QuerySets para django
from django.http import HttpResponse
from django.core.serializers import serialize
import json

# Create your views here.
"""def index(request):
	items = Item.objects.all()
	context = Context({'title': 'Hola cidei', 'items':items})
	return render_to_response('index.html', context)
"""

def index(request):
	context = Context({'title': 'Hola cidei'})
	return render_to_response('index.html', context)

def items(request):
	items = Item.objects.all()
	context = Context({'items':items})	
	return render_to_response('items.html', context)

def categories(request):
	categories = Category.objects.all()
	context = Context({'categories':categories})	
	return render_to_response('categories.html', context)

def item_details(request, item_id):
	item = get_object_or_404(Item, id=item_id)
	context = Context({
		'title' : 'Detalle de: %s' % item.name,
		'item' : item
	})
	return render_to_response('item-details.html', context)

def category_details(request, slug):
	category = get_object_or_404(Category, slug=slug)
	context = Context({
		'title' : 'Detalle de: %s' % category.name,
		'categorias' : category
	})
	return render_to_response('category-details.html', context)

def about(request):
	context = Context({'title': 'About', 'paragraph': 'jkajshgdfhasgfdhasfdhas hsfdhsh ksahdfjahsgdf sjdgash'})
	return render_to_response('about.html', context)

def add_item(request):
	if request.method == "POST":
		form= ItemForm(request.POST)
		if form.is_valid():
			#Crear un nuevo item
			item = Item.objects.create(
				listing = form.cleaned_data['listing'],
				name = form.cleaned_data['name'],
				category = form.cleaned_data['category'],
				department = form.cleaned_data['department'],
				description = form.cleaned_data['description'],
				update_item = form.cleaned_data['update_item'],
			)

			#Siempre que cree el dato correctamente redireccionar
			return HttpResponseRedirect('/items/%s/' % item.id)
	else:
		form = ItemForm()

	context = Context({'title': 'Adicionar item', 'form':form})
	return render_to_response('form.html', context, context_instance=RequestContext(request))

def add_categories(request):
	if request.method == "POST":
		form = CategoryForm(request.POST)
		if form.is_valid():
			#Crear un nuevo category
			category = Category.objects.create(
				name = form.cleaned_data['name'],
				slug = form.cleaned_data['slug'],
				description = form.cleaned_data['description'],
				type_category = form.cleaned_data['type_category'],
				update_category = form.cleaned_data['update_category'],
			)
			#Siempre que cree el dato correctamente redireccionar
			return HttpResponseRedirect('/categories/%s/' % category.slug)
	else:
		form = CategoryForm()

	context = Context({'title':'Creacion de categorias', 'form': form, 'info_button':'Crear categoria'})
	return render_to_response('add-category.html', context, context_instance = RequestContext(request))

def edit_category(request, slug):
	category = get_object_or_404(Category, slug=slug)
	if request.method == "POST":
		form = CategoryForm(request.POST)
		if form.is_valid():
			category.name = form.cleaned_data['name']
			category.slug = form.cleaned_data['slug']
			category.save()

			return HttpResponseRedirect('/categories/%s/' % category.slug)
	else:
		category_data = {
		'name' : category.name,
		'slug' : category.slug
		}
		form = CategoryForm(initial=category_data)

	context = Context({'title': 'Editar la categoria', 'form': form, 'info_button': 'Actualizar'})
	return render_to_response('add-category.html', context, context_instance=RequestContext(request))


def ajax_items(request):
	if request.is_ajax():
		items = Item.objects.all()
		print items
		items = serialize('json', items)
		print items
		items = json.dumps(items)
		print items

		return HttpResponse(items, content_type='application/json')
	else:
		return HttpResponse({'error':'Hubo un error'}, content_type='application/json')