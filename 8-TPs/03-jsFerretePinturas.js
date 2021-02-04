/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var F;
	var C;

	F = txtIdTemperatura.value;
	F = parseFloat(F);

	C = (F - 32) / 1.8;

	alert (F+"° Fahrenheit son "+C+"° centígrados");
}

function CentigradosFahrenheit () 
{
	var F;
	var C;

	C = txtIdTemperatura.value;
	C = parseFloat(C);

	F = (C * 1.8) + 32;

	alert (C+"° centígrados son "+F+"° Fahrenheit");
}
