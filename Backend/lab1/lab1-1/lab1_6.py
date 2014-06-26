"""
File: lab1_6.py
Convertir de decimal a binario
"""

decimal = input("Ingrese el numero decimal a convertir: ")
modulo = ""

while decimal > 0:
	cociente = decimal % 2
	decimal = decimal / 2
	modulo = str(cociente) + modulo
	print "%5d%8d%12s" % (decimal, cociente, modulo)

print "El numero binario es: ", modulo
	