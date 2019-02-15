import os.path
import subprocess

class SourcesList:
	
	def mostrar(self):
		f = open('/etc/apt/sources.list','r')
		return (True,f.read())
	def guardar(self,linies):
		f = open('/etc/apt/sources.list','w')
		f.write(linies)

	def mostrarPropis(self):
		f = open('/usr/share/lliurex-apt2/reps','r')
		return (True,f.read())
	def execUpdate(self):
		p1 = subprocess.Popen(["apt-get","update"], stdout=subprocess.PIPE)
		p1.wait()
		if p1.stderr:
			result = p1.stderr.readlines()
		else:
			result= p1.stdout.readlines()
		return result
	def guardarPropis(self,linies):
		f = open('/usr/share/lliurex-apt2/reps','w')
		f.write(linies)
	def execAptUpdate(self,linies):		
		self.guardar(linies)
		return self.execUpdate()
	def test(self,user,password):
		
		#ret=validate_user(user,pwd)
		#print ret
		#return ret
		return True

#class SourcesList 

if __name__=="__main__":
	
	SL = SourcesList()
	print SL.mostrar()
