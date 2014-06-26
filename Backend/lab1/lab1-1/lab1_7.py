# -*- coding: utf-8 -*-
"""
File: lab1_7.py

Generador de sentencias aleatorias con palabras

"""

import random

articles = ("Un", "El", "Ella", "Nosotros", "Yo",)

nouns = ("Mujer", "Hombre", "Carro", "Moto", "Perro", "Avion",)

verbs = ("Gustar", "Hablar", "Comer", "Decir",)

prepositions = (" con", " por",)

def sentences():
	""" Construir y retornar una oración o sentencia """
	return nounPhrase() + " " + verbPhrase()

def nounPhrase():
	""" Construir y retornar una frase con palabras """
	return random.choice(articles) + " "  + random.choice(nouns)

def verbPhrase():
	""" Construir y retornar una frase con verbo """
	return random.choice(verbs) + " " + nounPhrase() + prepositionalPhrase()

def prepositionalPhrase():
	""" Construir y retornar una preposition a la frase """
	return random.choice(prepositions) + " " + nounPhrase()

def main():
	number = input("Ingrese el número de frases a construir: ")
	for count in xrange(number):
		print sentences()

main()
