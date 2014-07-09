# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Category.description'
        db.add_column(u'app_category', 'description',
                      self.gf('django.db.models.fields.TextField')(default=u'Esta es una descripción por defecto'),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Category.description'
        db.delete_column(u'app_category', 'description')


    models = {
        u'app.category': {
            'Meta': {'object_name': 'Category'},
            'description': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'posted_on': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'unique': 'True', 'max_length': '255'}),
            'update_item': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'app.item': {
            'Meta': {'object_name': 'Item'},
            'category': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['app.Category']"}),
            'department': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'description': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'listing': ('django.db.models.fields.CharField', [], {'default': "'t'", 'max_length': '1'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '120'}),
            'posted_on': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'update_item': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'app.pictures': {
            'Meta': {'object_name': 'Pictures'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'item': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['app.Item']"}),
            'url': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        }
    }

    complete_apps = ['app']