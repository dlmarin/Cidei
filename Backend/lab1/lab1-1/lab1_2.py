# -*- coding: utf-8 -*-

"""
Program: lab1_2.py
Author: Diana

1. Ingresar el valor para saber el rango 
	a través de la línea de	comandos ingresamos el valor de la calificación
2. Mostrar el tipo de calificación
	Se muestra en línea de comandos la valoración para el rango de la calificación

"""

number = input("Ingrese el número de su calificación")

if number > 89:
	letter = '5'
elif number > 79:
	letter = '8'
elif number > 69:
	letter = 'A'
else:
	letter = 'Un caso perdido'

print "Su calificación esta dentro del rango: ", letter
