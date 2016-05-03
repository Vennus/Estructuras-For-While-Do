//Escribe aquí tú código
var suma = 0;
var c = 1;
while(c<=10){
	var numero = prompt("Ingrese numero "+c+":");
	suma=suma+parseInt(numero);
	c++;
}
alert("La suma es: "+ suma);