/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 




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

function restar()
{
	var numberOne;
	var numberTwo;
	var subtract;

	//Entradas
	numberOne = document.getElementById('txtIdNumeroUno').value;
	numberTwo = document.getElementById('txtIdNumeroDos').value;

	//Conversiones
	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	subtract = numberOne - numberTwo;
	alert("La resta es: "+subtract);	
}

function multiplicar()
{ 
	var numberOne;
	var numberTwo;
	var multiply;

	//Entradas
	numberOne = document.getElementById('txtIdNumeroUno').value;
	numberTwo = document.getElementById('txtIdNumeroDos').value;

	//Conversiones
	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	multiply = numberOne * numberTwo;
	alert("El producto es: "+multiply);	
}

function dividir()
{
	var numberOne;
	var numberTwo;
	var divide;

	//Entradas
	numberOne = document.getElementById('txtIdNumeroUno').value;
	numberTwo = document.getElementById('txtIdNumeroDos').value;

	//Conversiones
	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	divide = numberOne / numberTwo;
	alert("El cociente es: "+divide);	
}

