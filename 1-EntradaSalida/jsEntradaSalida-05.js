
/*
Guglielmino
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreAlumno;
	var edadAlumno;
	var apellidoAlumno;

	nombreAlumno = document.getElementById('txtIdNombre').value;
	edadAlumno = document.getElementById('txtIdEdad').value;

	alert ("Usted se llama "+nombreAlumno+" y tiene "+edadAlumno+" años.");
}

