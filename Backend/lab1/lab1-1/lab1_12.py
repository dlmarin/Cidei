class Person(object):

	def __init__(self, name, cedula, age):
		self._name = name
		self._cedula = cedula
		self._age = age

	def getName(self):
		"""Retornando el nombre"""
		return self._name

	def getAge(self):
		"""Retornando la edad"""
		return self._age

	def getCedula(self):
		"""Retorna la cedula"""
		return self._cedula

	def __str__(self):
		return "%s - %d -%d" % (self._name, self._cedula, self._age)


class Student(Person):
	def __init__(self, name, cedula, age):
		self._scores = []
		self._assigments = []	
		
		Person.__init__(self, name, cedula, age)

	def setScore(self, scores):
		self._scores.append(scores)

	def getScore(self):
		return self._scores

	def getAssigments(self):
		return self._assigments

	def setAssigments(self, assigments):
		self._assigments.append(assigments)

	def __str__(self):
		return "%s - %d - %d" % (self._name, self._cedula, self._age)
		

class Teacher(Person):
	def __init__(self, name, cedula, age, profession, numberId):
		self._profession = profession
		self._numberId = numberId

		Person.__init__(self, name, cedula, age)

	def getProfession(self):
		return self._profession

	def getNumberId(self):
		return self._numberId