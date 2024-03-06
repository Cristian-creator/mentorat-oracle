// --------------  Operatori logici  ------------
// <, <=, ===, >=, >, !==
let a = 10;
let b = 62;
let suma = a + b;

let c = a > b;

// console.log( 8 !== 7 );

// --------------  If statement  ------------
// let idUserCurent = 4;

// if (idUserCurent <= 5) {
//     console.log("bine ai venit, admine");
// }

// 19:31
// Ex 1) Sa se creeze o variabila reprezentand temperatura din Bucuresti. Daca temperatura este sub 10 ( strict )
// sa se afiseze in consola "este frig"
// Ex 2) Sa se creeze o variabila repreezentand distanta dintre Bucuresti si Cluj. Daca distanta este mai mare sau
// egala decat 300 sa se afiseze in consola "este departe"
// Ex 3) Sa se creeze o variabila a si o variabila b. Daca a este mai mare decat b atunci sa se afiseze in consola
// mesajul "variabila a este mai mare decat b"

// --------------  Else  ------------
let idUserCurent = 7;

if (idUserCurent <= 5) {
    console.log("bine ai venit, admine");
} else {
    console.log("bine ai venit, usere");
}

// 20:05
// Ex 4) Sa se creeze o variabila reprezentand temperatura din Bucuresti. Daca temperatura este sub 10 ( strict )
// sa se afiseze in consola "este frig", in caz contrar sa se afiseze in consola "este bine"
// Ex 5) Sa se creeze o variabila repreezentand distanta dintre Bucuresti si Cluj. Daca distanta este mai mare sau
// egala decat 300 sa se afiseze in consola "este departe", in caz contrar sa se afiseze in consola "este aproape"
// Ex 6) Sa se creeze o variabila a si o variabila b. Daca a este mai mare decat b atunci sa se afiseze in consola
// mesajul "variabila a este mai mare decat b", , in caz contrar sa se afiseze in consola "variabila b este mai mare decat a"

let numeleMeu = "Cristian"; // double quotes, single quotes

console.log( `Numele meu este ${numeleMeu}. Iar id-ul meu este ${idUserCurent}` ); // va ganditi la backticks atunci cand vreti intr-un string sa inserati valoarea unei variabile

console.log( "Numele meu este " + numeleMeu + "." );

let contorizator = 0;

contorizator = contorizator + 2;
contorizator = contorizator + 2;
contorizator = contorizator + 2;

console.log(contorizator);

// --------------  Functii  ------------
// arrow function
let cresteContorizatorCuUnu = () => {
    contorizator = contorizator + 10;
};

cresteContorizatorCuUnu();
cresteContorizatorCuUnu();
cresteContorizatorCuUnu();
cresteContorizatorCuUnu();
cresteContorizatorCuUnu();
cresteContorizatorCuUnu();

console.log(contorizator);

// Q: Ce face o functie?
// A: o functie executa cod

// Q: Ce cod executa o functie?
// A: ce pui intre acoladele ei la momentul crearii

// Q: Ce linii de cod poti pune intr-o functie? Ce poti sa ii zici unei functii sa faca?
// A: intr-o functie poti scrie orice linii de cod pe care le poti scrie si in afara functiei

// Q: Cand se executa codul dintr-o functie?
// A: atunci cand apelam functia

// Q: Cum se apeleaza o functie?
// A: ii scrii numele iar apoi pui o pereche de paranteze rotunde 

// Q: Cand stii ca ai nevoie sa folosesti o functie?
// A: nu avem tocmai un raspuns universal, deocamdata in exercitii se mentioneaza ca trebuie creata o functie

let afiseazaMesajEroare = () => {
    alert('A aparut o eroare');    
};

// afiseazaMesajEroare();
// afiseazaMesajEroare();
// afiseazaMesajEroare();

// parametru
let calculeazaPretIntreg = (pretProdus) => { // pretProdus = 50
    return pretProdus + 0.05 * pretProdus;
};

let pretProdus1 = 10;
let pretProdus2 = 50;
let pretProdus3 = 60;

// let pretIntregProdus1 = pretProdus1 + 0.05 * pretProdus1;
// let pretIntregProdus2 = pretProdus2 + 0.05 * pretProdus2;
// let pretIntregProdus3 = pretProdus3 + 0.05 * pretProdus3;
let pretIntregProdus1 = calculeazaPretIntreg(pretProdus1);
let pretIntregProdus2 = calculeazaPretIntreg(pretProdus2);
let pretIntregProdus3 = calculeazaPretIntreg(pretProdus3);

// Observatii:
// - nu toate functiile au return
// - nu punem return in afara unei functii
// - atunci cand codul dintr-o functie ajunge la return, executia se incheie si se returneaza valoarea din dreapta return-ului
// - o functie poate sa returneze orice tip de data
// - o functie poate avea de la zero la infinit numar de parametrii

let calculeazaSumaNumere = (primulParametru, alDoileaParametru) => {
    // primulParametru = 3
    // alDoileaParametru = 5
    let suma = primulParametru + alDoileaParametru;
    return suma;
};

let d = calculeazaSumaNumere(3, 5);


