/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var width;
var height;
var total;

width = txtIdLargo.value;
height = txtIdAncho.value;

width = parseFloat(width);
height = parseFloat(height);

total = (width * 2 + height * 2) * 3;

alert ("Se necesitará en total "+ total+" metros de alambre");
}

function Circulo () 
{
	var radius;
	var c;
	var total;

	radius = txtIdRadio.value;
	radius = parseFloat(radius);

	c = 2 * Math.PI * radius;
	total = c * 3;

	alert ("Se necesitará comprar "+total+" metros de alambre");

}

function Materiales () 
{
	var width;
    var height;
    var radius;
    var areaSquare;
    var areaCircle;
    var cemSquare;
    var cemCircle;
    var calSquare;
    var calCircle;

    width = txtIdLargo.value;
    height = txtIdAncho.value;
    radius = txtIdRadio.value;

    width = parseFloat(width);
    height = parseFloat(height);
    radius = parseFloat(radius);

    areaSquare = width * height;
    areaCircle = Math.PI * Math.pow(radius, 2);

   	cemSquare = areaSquare * 2;
   	calSquare = areaSquare * 3;

   	cemCircle = areaCircle * 2;
   	calCircle = areaCircle * 3;

   	alert("Para el terreno rectangular se necesitarán "+Math.ceil(cemSquare)+" bolsas de cemento y "+Math.ceil(calSquare)+" bolsas de cal. Para el circular se necesitarán "+Math.ceil(cemCircle)+" bolsas de cemento y "+Math.ceil(calCircle)+" bolsas de cal.");


}