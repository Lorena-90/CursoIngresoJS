/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   var largo;
    var ancho;
    var perimetro;
    var metrosDeAlambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = 2 * (largo + ancho);
    metrosDeAlambre = perimetro * 3;

    alert ("Usted necesita: " + metrosDeAlambre + "mts");




}
function Circulo () 
{ 
    var radio;
    var perimetro;
    var pi = 3.14;
    var metrosDeAlambre;

    radio = txtIdRadio.value;
    radio = parseInt(radio);

    perimetro = 2 * radio * pi;

    metrosDeAlambre = perimetro * 3;

    alert ("Usted necesita: " + metrosDeAlambre + "mts");


	
}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cemento;
    var cal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    
    superficie = largo * ancho;

    cemento = superficie * 2;
    cal = superficie * 3;

    alert ("Usted necesita: " +cemento+ " bolsas de cemento " + "y " +cal+ " bolsas de cal");
}