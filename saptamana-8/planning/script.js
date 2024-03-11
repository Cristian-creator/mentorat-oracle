// --------------  Arrays  ------------
// Q: Ce este un array ?
// A: este un tip de data in javascript

// Q: cum arata un array?
// A: ["Whisky", "Gheata", "Lapte", "Pui"]
let listaDeCumparaturi = ["Whisky", "Gheata", "Lapte", "Pui"];
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
