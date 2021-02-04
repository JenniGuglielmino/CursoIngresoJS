/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numberOne;
	var numberTwo;
	var add;

	//Entradas
	numberOne = document.getElementById('txtIdNumeroUno').value;
	numberTwo = document.getElementById('txtIdNumeroDos').value;

	//Conversiones
	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	add = numberOne + numberTwo;
	alert("La suma es: "+add);
}

