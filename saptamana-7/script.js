// --------------  Variabile  ------------
// Cum creezi o variabila?
// 1) scrii let pe o linie goala
// 2) pui un nume
// 3) pui semnul egal 
// 4) pui o valoare
// 5) adaugi punct si virgula

let a = 10;
let b = 8;

// Timp: 20:18
// Ex 1) sa se creeze o variabila cu numele y si sa aiba valoarea 27
// Ex 2) sa se creeze o variabila cu numele temperatura si sa aiba valoarea -2
// Ex 3) sa se creeze o variabila cu numele distanta si sa aiba valoarea 450
let y = 27;
let temperatura = -2;
let distanta = 450;

// notatie camel case
let temperaturaDinBucuresti = -2;
let temperaturaDinCluj = 1;

// Reguli & restrictii denumiri variabile:
// 1) FARA spatii in nume. NU "let temperatura din bucuresti = -2;". DA "let temperaturaDinBucuresti = -2;"
// 2) numele nu poate sa inceapa cu cifre ( recomandare: nu folositi deloc cifre in interiorul numelui )
// NU "let temperatura2 = -2;". DA "let temperaturaDoi = -2;"
// 3) cu foarte mici exceptii, nu poti include alte caractere in numele unei variabile in afara de litere si cifre

// Ex 4) sa se creeze o variabila reprezentand distanta dintre bucuresti si constanta si sa aiba valoarea 300
// Ex 5) Sa se creeze o variabila reprezentand id-ul userului curent si sa aiba valoarea 72

// --------------  Tipuri de date  ------------
// number
let numarulSaptamaniiCurenteDeCurs = 7;

// string
let numeleMeu = "Cristian"; // la string intra orice e text

// boolean ( tipul asta de data are doar doua valori - true si false)
let invatamJavascript = true;

// --------------  Operatori aritmetici  ------------
// +, -, *, /
a = 12;
let c = 1 + 3;
let d = 8 - 5;
let e = c - d;

a = 10;

let inmultire = a * b;

console.log( a );
console.log( b );
console.log( inmultire );

// Ex 6) Sa se creeze o variabila reprezentand pretul unui produs fara tva si sa aiba valoarea 100.
// Ex 7) Sa se creeze o variabila reprezentand pretul produsului de mai sus, dar cu TVA ( cota de tva este 19% )

let pretInitial = 100;
let pretCuTVA = pretInitial + 0.19 * pretInitial;

console.log( pretInitial );
console.log( pretCuTVA );
