//Escribe aquí tú código
var suma = 0;
var r = 1;
do {
	var numero = prompt("Ingrese numero " + r + ":");
	suma= suma+ parseInt(numero);
	r++;
}
while(r<=10)
alert("La suma es : " + suma);