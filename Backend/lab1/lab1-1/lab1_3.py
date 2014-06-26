sum = 0.0
data = raw_input("Ingrese un número: ")

while data != "":
	number = float(data)
	sum += number
	data = raw_input("Ingrese el siguiente número: ")
	sum +=data

print "Esa suma extraña es: ", sum