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