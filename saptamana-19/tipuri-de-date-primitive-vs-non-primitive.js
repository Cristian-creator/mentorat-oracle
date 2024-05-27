// Declarare vs initializare
// let x; // declarare
// let x = 5; // = 5 - initializare 

// ---------- Tipuri de date primitive ---------

// Descriere: Tipurile de date primitive sunt tipuri de date simple SAU tipuri de date de baza.

// Caracteristici:
// - sunt immutable, nu pot fi modificate odata ce au fost create
// - sunt transmise ca valori

const age = 16; // number - efectiv orice numar, fie intreg, fie cu zecimala, fie pozitiv, fie negativ
const str = "Cristian"; // string - o insiruire de caractere puse intre ghilimele ('', "", ``);
const isAdmin = true; // boolean - true / false
const n = null; // null - indica absenta unui obiect

const userData = {
    name: "Cristian",
    age: 22,
    address: {
        street: "Lascar Catargiu",
        city: "Bucharest"
    }
};

const userData2 = {
    name: "Erhard",
    age: undefined,
    address: null
};

const u = undefined; // undefined - indica absenta unei valori primitive (number, string, boolean)

// let y; // by default o variabila este initializata cu undefined

// const showAlert = () => {
//     alert('Aloooo ce faci?');
//     return 5;
// }

// const z = showAlert();

// console.log( z );

// ------- Tipuri de date non-primitive ( Obiectul ) ------

// Descriere: Tipurile de date non-primitive sunt tipuri de date complexe

// Caracteristici:
// - sunt mutable, pot fi modificate odata ce au fost create
// - sunt transmise ca referinte

// Obiectul are 3 ramuri:
// 1) Obiect clasic - relatie key - value
const myEvent = {
    name: 'Global Blockchain Event 2023',
    numberOfParticipants: 1800,
    isOnline: false
};

// 2) Array-ul
const names = ['Cristian', 'Eduard', 'Andreea', 'Ion']; // array-ul este un tip special de obiect care are o relatie integer-keyed - value

// 3) Functiile - reprezinta obiecte cu o caracteristica aditionala, aia de a fi callable
const greet = () => {
    console.log("Sa traiasca");
}

let x = 5;

let y = x; 

console.log( y );

const myEvent2 = myEvent;
const myEvent3 = myEvent;

myEvent2.name = 'Global Blockchain Event 2024';
myEvent3.isOnline = true;

console.log(myEvent);

const myEvent4 = { ...myEvent };

myEvent4.name = 'adsdasda';

console.log(myEvent);

// !!Important!!
// Cand creez o variabila careia ii dau ca valoare o alta variabila
// care contine un obiect, atunci variabila noua va contine o referinta
// catre acel obiect.