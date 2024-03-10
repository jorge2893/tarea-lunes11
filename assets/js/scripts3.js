let diastotales = 373;
let anios = 0;
let semanas = 0;
let dias = 0;

if(diastotales >= 365){
    anios = Math.floor(diastotales/365)
    diastotales = diastotales - (anios * 365);
}
console.log("Dias Totales", diastotales);
if(diastotales >= 7){
    semanas = Math.floor(diastotales/7);
    diastotales = diastotales - (semanas * 7);
}
dias = diastotales;

console.log ("años", anios);
console.log ("Semanas", semanas);
console.log("Dias", dias);
// ver si se puede realizar de otra forma