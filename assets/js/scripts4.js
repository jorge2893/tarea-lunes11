let nume1 = prompt("Ingresar primer número");
let nume2 = prompt("Ingresar segundo número");
let nume3 = prompt("Ingresar tercer número");
let nume4 = prompt("Ingresar cuarto número");
let nume5 = prompt("Ingresar quinto número");

nume1 = Number(nume1);
nume2 = Number(nume2);
nume3 = Number(nume3);
nume4 = Number(nume4);
nume5 = Number(nume5);

let promedio = (nume1 + nume2 + nume3 + nume4 + nume5) / 5;

document.writeln("<p>El resultado del promedio es: " + promedio + "</p>");
