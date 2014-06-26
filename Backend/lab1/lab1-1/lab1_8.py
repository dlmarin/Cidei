# -*- coding: utf-8 -*-
"""
File: lab1_8.py

Funcion cuadratica

"""

"""

import math

def cuadratic(**kwargs):	
		print(((kwargs['b']*(-1)) + raiz(**kwargs))/2*kwargs['a'])
	    print(((kwargs['b']*(-1)) - raiz(**kwargs))/2*kwargs['a'])

def raiz(**kwargs):
		return math.sqrt(kwargs['b']*2 - 4*kwargs['a']*kwargs['c'])

def main():	
		na = input("Ingrese el valor de a: ")
		nb = input("Ingrese el valor de b: ")
		nc = input("Ingrese el valor de c: ")
		cuadratic(a=na, b=nb, c=nc)

main()

"""
def funcionCuadratica(**kwargs):
       print(((kwargs['b']*(-1)) + raiz(**kwargs))/2*kwargs['a'])
       print(((kwargs['b']*(-1)) - raiz(**kwargs))/2*kwargs['a'])

def raiz(**kwargs):
       return (kwargs['b']*2 - 4*kwargs['a']*kwargs['c'])*(0.5)

def main():
       valorA = input("Ingrese a: ")
       valorB = input("Ingrese b: ")
       valorC = input("Ingrese c: ")

       funcionCuadratica(a=valorA, b=valorB, c=valorC)

main()


