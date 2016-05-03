//Escribe aquí tú código
var suma = 0;
for (var i = 1 ; i <= 10; i++) {
	var numero = parseInt(prompt("Ingrese numero" + i))
	suma=suma+parseInt(numero)
}
alert(" La suma es : " + suma)