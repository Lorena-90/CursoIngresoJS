/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    
    var centigrados;
    var temperatura;

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    centigrados = (temperatura - 32) / 1.8;

    alert ("Son: " + centigrados + " grados centigrados");
    
	
}

function CentigradosFahrenheit () 
{
    var fahrenheit;
    var temperatura;

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    fahrenheit = (temperatura * 1.8) + 32;

    alert ("Son: " + fahrenheit + " grados fahrenheit");
    
	
}
