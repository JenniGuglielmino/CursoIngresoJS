/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe = document.getElementById('txtIdSueldo').value;
	importe = parseInt(importe);

	//aumento = importe * 0.1;
	//resultado = importe + aumento;
	//resultado = importe + (sueldo * 0.1);
	//aumento = importe * 10/100;

	resultado = importe * 1.1;

	document.getElementById('txtIdResultado').value = resultado;
}

