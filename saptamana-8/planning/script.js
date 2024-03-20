// --------------  Arrays  ------------
// Q: Ce este un array ?
// A: este un tip de data in javascript

// Q: cum arata un array?
// A: ["Whisky", "Gheata", "Lapte", "Pui"]
let listaDeCumparaturi = ["Whisky", "Gheata", "Lapte", "Pui" ];
// index-uri                 0         1         2       3

// Q: ce poate contine un array?
// A: orice tip de data ( number, string, boolean ). atentie!! nu trebuie sa contina doar un tip de data
// un array poate contine oricate elemente

// Q: cum folosesti o informatie dintr-un array?
// A: scrii numele array-ului, apoi pui paranteze patrate, iar intre parantezele patrate pui indexul elementului

// console.log( listaDeCumparaturi[1] );

// let numeleMeu = "cristian";

// console.log( numeleMeu.length );

// // console.log( listaDeCumparaturi.length );
// let lungimeaListeiDeCumparaturi = listaDeCumparaturi.length;
// console.log( lungimeaListeiDeCumparaturi );

// console.log( listaDeCumparaturi[listaDeCumparaturi.length - 1] );

// Q: cum adaugi un element intr-un array?
// A: folosind push

console.log( listaDeCumparaturi );

listaDeCumparaturi.push("Paine");

console.log( listaDeCumparaturi );

// Q: cum stergi un element sau mai multe dintr-un array?
// A: folosind splice

listaDeCumparaturi.splice(1, 1);

console.log(listaDeCumparaturi);

// Timp: 21:41
// Ex. 1) Sa se creeze un array cu 4 elemente. Puteti sa il denumiti "primulMeuArray". Apoi:
// - sa se afiseze in consola primul element din array
// - sa se afiseze in consola al treilea element din array
// - sa se adauge in array inca doua elemente
// - sa se stearga din array elementele de la index-ul 2 si indexul 3
// - sa se afiseze in consola tot array-ul

listaDeCumparaturi.splice(2, 1);

console.log(listaDeCumparaturi);

// Tema:

// Exercitii
// 1. Sa se creeze o functie care primeste trei parametrii ( d, e și f ) si returneaza produsul lor
// 2. Sa se creeze o functie care primeste un parametru ( x ) si returneaza diferența lui cu 10. De exemplu dacă x = 16, funcția sa returneze 6
// 3. Sa se creeze o functie care primeste un parametru ( a ) si returneaza opusul lui. De exemplu dacă a este 7 funcția sa returneze -7.
// 4. Sa se creeze o functie care primeste doi parametrii ( x si y ) si returneaza diferenta lor inmultita cu 2. Ex: dacă x = 24, y = 4, funcția sa returneze valoarea 40, adica (24 - 4) * 2
// 5. Sa se creeze o functie care primeste un parametru ( notaMea ) si returneaza “Promovat” dacă valoarea parametrului este peste 5 ( inclusiv ), în caz contrar returnează “Picat”
// 5. Sa se creeze o functie care primeste un parametru ( notaMea ) si returneaza “Promovat” dacă valoarea parametrului este peste 5, returneaza "la limita bro" daca valoarea parametrului este 5, în caz contrar returnează “Picat”
// 6. Sa se creeze o funcție care primeste doi parametrii ( a si b ) și dacă diferența lor ( a - b ) este mai mare decât 10, atunci sa returneze true, altfel false.
// 7. Sa se creeze o funcție care primeste doi parametrii ( a si b ) și dacă cele doua numere sunt egale sa se returneze true, altfel false.
// 8. Sa se creeze o funcție care primeste doi parametrii ( a si b ) și dacă este a mai mare decat b, atunci sa se returneze a, altfel b.
// 9. Sa se creeze un array cu 3 elemente. Puteti sa il denumiti "primulMeuArray". Apoi:
// - sa se afiseze in consola elementul de pe indexul 2
// - sa se stearga elementul de pe indexul 2
// - sa se afiseze in consola tot array-ul
// - sa se adauge in array inca un element
// - sa se afiseze in consola tot array-ul
// - sa se stearga elementul nou adaugat
// - sa se afiseze in consola tot array-ul
