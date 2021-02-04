/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioA;
	var precioB;
	var precioC;
	var total;

	precioA = txtIdPrecioUno.value;
	precioB = txtIdPrecioDos.value;
	precioC = txtIdPrecioTres.value;

	precioA = parseFloat(precioA);
	precioB = parseFloat(precioB);
	precioC = parseFloat(precioC);

	total = precioA + precioB + precioC;

	alert("La suma total es de: "+total);
}
function Promedio () 
{
	var precioA;
	var precioB;
	var precioC;
	var total;

	precioA = txtIdPrecioUno.value;
	precioB = txtIdPrecioDos.value;
	precioC = txtIdPrecioTres.value;

	precioA = parseFloat(precioA);
	precioB = parseFloat(precioB);
	precioC = parseFloat(precioC);

	total = (precioA + precioB + precioC) / 3;

	alert("El promedio de precio: "+total);
}
function PrecioFinal () 
{
	var precioA;
	var precioB;
	var precioC;
	var total;

	precioA = txtIdPrecioUno.value;
	precioB = txtIdPrecioDos.value;
	precioC = txtIdPrecioTres.value;

	precioA = parseFloat(precioA);
	precioB = parseFloat(precioB);
	precioC = parseFloat(precioC);

	total = (precioA + precioB + precioC) * 1.21;

	alert("El precio final más IVA es de: "+total);
}