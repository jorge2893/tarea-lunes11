// var num1 = prompt ("ingresar primer numero");
// var num2 = prompt ("ingresar segundo numero");

// document.write("la suma es: ");
// document.write(parseInt(num1)+parseInt (num2));
// document.write(" ");
// document.write("la resta es: ");
// document.write(parseInt(num1)-parseInt (num2));
// document.write(" ");
// document.write("la multiplicación es: ");
// document.write(parseInt(num1)*parseInt (num2));
// document.write(" ");
// document.write("la división es: ");
// document.write(parseInt(num1)/parseInt (num2));
// document.write(" ");

// // Nombre del archivo: operaciones.js
// document.getElementById("resultados").innerHTML = "<p>Operaciones Aritméticas con Números Ingresados por el Usuario:</p>";

// // Solicitar al usuario que ingrese dos números
// let num1 = parseFloat(prompt("Ingrese el primer número:"));
// let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// // Verificar si se ingresaron números válidos
// if (isNaN(num1) || isNaN(num2)) {
//     document.getElementById("resultados").innerHTML += "<p>Por favor, ingrese números válidos.</p>";
// } else {
//     // Realizar operaciones aritméticas
//     document.getElementById("resultados").innerHTML += "<p>Suma: " + (num1 + num2) + "</p>";
//     document.getElementById("resultados").innerHTML += "<p>Resta: " + (num1 - num2) + "</p>";
//     document.getElementById("resultados").innerHTML += "<p>Multiplicación: " + (num1 * num2) + "</p>";
//     document.getElementById("resultados").innerHTML += "<p>División: " + (num1 / num2) + "</p>";
//     document.getElementById("resultados").innerHTML += "<p>Módulo: " + (num1 % num2) + "</p>";
// }


// // Nombre del archivo: operaciones.js
// document.write("<p>Operaciones Aritméticas con Números Ingresados por el Usuario:</p>");

// // Solicitar al usuario que ingrese dos números
// let num1 = Number(prompt("Ingrese el primer número:"));
// let num2 = Number(prompt("Ingrese el segundo número:"));

// // Realizar operaciones aritméticas sin verificar la validez de los números
// document.write("<p>Primer número: " + num1 + "</p>");
// document.write("<p>Segundo número: " + num2 + "</p>");
// document.write("<p>Suma: " + (num1 + num2) + "</p>");
// document.write("<p>Resta: " + (num1 - num2) + "</p>");
// document.write("<p>Multiplicación: " + (num1 * num2) + "</p>");
// document.write("<p>División: " + (num1 / num2) + "</p>");
// document.write("<p>Módulo: " + (num1 % num2) + "</p>");



let numero1 = prompt("Ingresar primer numero mayor a cero");
let numero2 = prompt("Ingresar segundo numero mayor a cero");

numero1 = Number(numero1);
numero2 = Number(numero2);


let suma = numero1 + numero2;

document.writeln("<p>El resultado de la suma es: " + suma + "</p>");

let resta = numero1 - numero2;

document.writeln("<p>El resultado de la resta es: " + resta + "</p>");

let multiplicación = numero1 * numero2;

document.writeln("<p>El resultado de la multiplicación es: " + multiplicación + "</p>");

let división = numero1 / numero2;

document.writeln("<p>El resultado de la división es: " + división + "</p>");

let Módulo = numero1 % numero2

document.writeln("<p>El resultado del modulo es: " + Módulo + "</p>");

// no se debe colocar defer en el script de js