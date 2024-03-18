// --------------  Operatori logici  ------------
// <, <=, ===, >=, >, !==
let a = 10;
let b = 62;
let suma = a + b;

let c = a > b;

// console.log( 8 !== 7 );

// --------------  If statement  ------------
let idUserCurent = 4;

if (idUserCurent <= 5) {
    console.log("bine ai venit, admine");
}

// 19:31
// Ex 1) Sa se creeze o variabila reprezentand temperatura din Bucuresti. Daca temperatura este sub 10 ( strict )
// sa se afiseze in consola "este frig"
// Ex 2) Sa se creeze o variabila repreezentand distanta dintre Bucuresti si Cluj. Daca distanta este mai mare sau
// egala decat 300 sa se afiseze in consola "este departe"
// Ex 3) Sa se creeze o variabila a si o variabila b. Daca a este mai mare decat b atunci sa se afiseze in consola
// mesajul "variabila a este mai mare decat b"

// --------------  Else  ------------
// let idUserCurent = 5;

// // 1, 2, 3, 4, 5
// if (idUserCurent <= 5) {
//     console.log("bine ai venit, admine");
// } else {
//     console.log("bine ai venit, usere");
// }

// 20:05
// Ex 4) Sa se creeze o variabila reprezentand temperatura din Bucuresti. Daca temperatura este sub 10 ( strict )
// sa se afiseze in consola "este frig", in caz contrar sa se afiseze in consola "este bine"
// Ex 5) Sa se creeze o variabila repreezentand distanta dintre Bucuresti si Cluj. Daca distanta este mai mare sau
// egala decat 300 sa se afiseze in consola "este departe", in caz contrar sa se afiseze in consola "este aproape"
// Ex 6) Sa se creeze o variabila a si o variabila b. Daca a este mai mare decat b atunci sa se afiseze in consola
// mesajul "variabila a este mai mare decat b", , in caz contrar sa se afiseze in consola "variabila b este mai mare decat a"

// let numeleMeu = "Cristian"; // double quotes, single quotes

// console.log( `Numele meu este ${numeleMeu}. Iar id-ul meu este ${idUserCurent}` ); // va ganditi la backticks atunci cand vreti intr-un string sa inserati valoarea unei variabile

// console.log( "Numele meu este " + numeleMeu + "." );

let contorizator = 0;

// contorizator = contorizator + 2;
// contorizator = contorizator + 2;
// contorizator = contorizator + 2;

// console.log(contorizator);

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

// Tema:
// Ex 1) Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. Daca numărul de produse este peste 5 ( inclusiv ) afișează în consola “Ai transport gratuit”.
// Ex 2) Sa se creeze o variabila reprezentand parola userului curent (ca valoarea a variabilei puneti orice string, ex: "pisicutsa123"). Apoi sa se afiseze in consola "Lungimea parolei este de X caractere" 
// Ex 3) Daca lungimea parolei este mai mare decat 8 sa se afiseze in consola "Puternica", altfel sa afiseze in consola "Slaba"
// Ex 4) Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. Daca numărul de produse este peste 5 afișează în consola “Ai transport gratuit”, altfel sa se afișeze “Mai adauga X produse ca sa ai transport gratuit”. X reprezintă diferența pana la 5. 
// Ex 5) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), iar functia sa returneze valorea parametrului plus 10
// Ex 6) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), iar functia sa returneze valorea parametrului inmultita cu 3
// Ex 7) Sa se creeze o funcție care primește doi parametrii ( știm ca amandoi de tip number ), iar functia sa returneze diferenta lor
// Ex 8) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), iar functia sa returneze true dacă valoarea parametrului este mai mai mare decât 5, iar în caz contrar sa returneze false.
// Ex 9) Sa se creeze o funcție care primește doi parametrii ( știm ca amandoi sunt de tip number ), iar functia sa returneze true dacă suma celor doi este mai mai mare decât 10, iar în caz contrar sa returneze false.
// Ex 10)  Sa se creeze o funcție care primește un parametru ( știm ca e de tip string ). Funcția sa returneze lungimea lui. De exemplu, dacă apelam funcția cu parametrul “Hello”, functia sa returneze 5

// Ex 1) Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. 
// Daca numărul de produse este peste 5 ( inclusiv ) afișează în consola “Ai transport gratuit”.

// let numberOfProducts = 3;

// if (numberOfProducts >= 5) {
//     console.log( "Ai transport gratuit" );
// } 

// Ex 5) Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), 
// iar functia sa returneze valorea parametrului plus 10

// let number = 5;

// let plusTen = (numberParameter) => {
//     return numberParameter + 10;
// };

// console.log( plusTen(5) );
// console.log( plusTen(8) );
// console.log( plusTen(123131231) );

// Ex 11) Sa se creeze o functie care primeste doi parametrii ( reprezentand 2 numere )
// Functia sa returneze impartirea lor

let impartire = (a, b) => { 
    return a / b;
};

// Ex 12) Sa se creeze o functie care primeste un parametru ( reprezetand un numar )
// Functia sa returneze "Pozitiv" daca parametrul este mai mare sau egal cu zero
// in caz contrar sa returneze "Negativ"

let creazaFunctia = (paraUnuMetru) => {
    return paraUnuMetru >= 0 ? true : false;
}

// Ex 13) Sa se creeze o functie care primeste doi parametrii a si b ( reprezentand 2 numere )
// Functia sa returneze "a este mai mare decat b" daca a este mai mare decat b,
// in caz contrar functia sa returneze "b este mai mare decat a"

// let compareTwoNumbers = (a, b) => {
//     // a = 8
//     // b = 12
//     if (a > b) {
//         return "a este mai mare decat b";
//     } else {
//         return "b este mai mare decat a";
//     }
// };
// AICI MERGE FARA ELSE
// let compareTwoNumbers = (a, b) => {
//     // a = 12
//     // b = 8
//     if (a > b) {
//         return "a este mai mare decat b";
//     }

//     return "b este mai mare decat a";
// };
// AICI NU MERGE FARA ELSE
// let compareTwoNumbers = (a, b) => {
//     // a = 12
//     // b = 8
//     if (a > b) {
//         console.log("a este mai mare decat b");
//     }

//     console.log("b este mai mare decat a");
// };

// Ca sa testam un return
// ASA NU:
// compareTwoNumbers(12, 8);
// "b este mai mare decat a";
// ASA DA:
// console.log( compareTwoNumbers(8, 12) );
// console.log( "b este mai mare decat a" );

// Ex 13) Sa se creeze o functie care primeste doi parametrii a si b ( reprezentand 2 numere )
// Functia sa returneze "a este mai mare decat b" daca a este mai mare decat b,
// functia sa returneze "a este egal cu b" daca a este egal cu b,
// in caz contrar functia sa returneze "b este mai mare decat a"

// Varianta 1
// let compareTwoNumbers = (a, b) => {
//     // a = 12
//     // b = 8
//     if (a > b) {
//         return "a este mai mare decat b";
//     }

//     if (a === b) {
//         return "a este egal cu b";
//     }

//     return "b este mai mare decat a";
// };

// Varianta 2
// let compareTwoNumbers = (a, b) => {
//     if (a > b) {
//         return "a este mai mare decat b";
//     } else if (a === b) {
//         return "a este egal cu b";
//     } else {
//         return "b este mai mare decat a";
//     }
// };

// Varianta 3
let compareTwoNumbers = (a, b) => {
    let result = "";

    if (a > b) {
        result = "a este mai mare decat b";
    } else if (a === b) {
        result = "a este egal cu b";
    } else {
        result = "b este mai mare decat a";
    }

    return result;
};

let numeleMeu = `Erhard`;

let functionLengthErhard = (nume) => {
    return `lungimea numelui Erhard este: ${ nume.length }`
}

let lungimeNume = functionLengthErhard(numeleMeu)

console.log (lungimeNume)

