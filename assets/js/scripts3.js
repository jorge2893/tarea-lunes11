// let diastotales = 373;
// let anios = 0;
// let semanas = 0;
// let dias = 0;

// if(diastotales >= 365){
//     anios = Math.floor(diastotales/365)
//     diastotales = diastotales - (anios * 365);
// }
// console.log("Dias Totales", diastotales);
// if(diastotales >= 7){
//     semanas = Math.floor(diastotales/7);
//     diastotales = diastotales - (semanas * 7);
// }
// dias = diastotales;

// console.log ("años", anios);
// console.log ("Semanas", semanas);
// console.log("Dias", dias);
// ver si se puede realizar de otra forma


let cifrasdias = prompt("Ingresar cifra");

let an = Math.floor(cifrasdias/365);
let sema = Math.floor((cifrasdias % 365) / 7);
let dias = Math.floor((cifrasdias % 7) - 1);


let resultado = "Años: " + an + ", Semanas" + sema + ", Días" + dias;

document.writeln(resultado);

// let diasIngresados, anios, semanas, dias;

// diasIngresados = prompt("Ingrese la cantidad de días");

// anios = Math.floor(diasIngresados / 365);
// let restoAnios = diasIngresados % 365;

// //console.log("resto años:", restoAnios);

// semanas = Math.floor(restoAnios / 7);

// dias = restoAnios%7;
// //console.log("Resto semanas:", restoSemanas);

// console.log("Años: ", anios);
// console.log("semanas: ", semanas);
// console.log("días: ", dias);

// let diasIngresados = 10;

// let anios = 0;
// let semanas = 0;
// let dias = 0;

// if(diasIngresados >= 365){
//     anios = Math.floor(diasIngresados/365);
//     diasIngresados = diasIngresados - (anios * 365);
// }
// if(diasIngresados >= 7){
//     semanas = Math.floor(diasIngresados/7);
//     diasIngresados = diasIngresados - (semanas * 7);
// }

// dias = diasIngresados;

// console.log("dias ingresados", diasIngresados);
// console.log("años: ", anios);
// console.log("semanas: ", semanas);
// console.log("días: ", dias);