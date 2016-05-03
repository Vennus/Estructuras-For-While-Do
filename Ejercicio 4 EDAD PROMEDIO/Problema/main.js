//Escribe aquí tú código
function edad(){
var alumnos = prompt("¿Cuantos alumnos son?");
var cantidadAlumnos=0;
var a = 1;
	do{
		numero = prompt("Ingresa la edad" + a +": ")
		cantidadAlumnos=cantidadAlumnos + parseInt(numero);
		a++;
	} while (a<=alumnos);
	alert("El promedio de edad es: " + cantidadAlumnos/alumnos);
}
edad();