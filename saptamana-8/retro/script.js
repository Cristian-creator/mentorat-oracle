let x = 5;

// modificare variabila
x = 7;

x += 3; // x = x + 3;

x -= 4; // x = x - 4;

x *= 2; // x = x * 2;

x /= 2; // x = x / 2;

x++; // x = x + 1; SAU x += 1;

// console.log( x );

// ---------- FOR LOOP -----------
// console.log("Buna");
// console.log("Buna");
// console.log("Buna");
// console.log("Buna");
// console.log("Buna");

// Sectiunea 1 - initializare - este executata o singura data inainte sa inceapa executarea repetitiva a for-ului
// Sectiunea 2 - conditionare - se defineste conditia in functie de care for-ul se executa. practic, atata timp cat conditia este
// adevarata, se executa codul din for ( codul dintre acolade )
// Sectiunea 3 - incremenetare - este executata dupa fiecare repetitie a for-ului si de regula aici crestem variabila i cu valoarea 1

// pasul 1) i = 0, i < 3 (true), se executa ce este in for, i++
// pasul 2) i = 1, i < 3 (true), se executa ce este in for, i++
// pasul 3) i = 2, i < 3 (true), se executa ce este in for, i++
// pasul 4) i = 3, i < 3 (false), se incheie executarea for-ului, iar javascript-ul isi continua executia

// console.log("START");

// for (let i = 0;i < 5;i++) {
//     console.log("Buna");
// }

// console.log("STOP");

// for (let i = 0;i < 5;i++) {
//     console.log( i );
// }

// 20:01
// Ex 1) Folosind un for loop sa se afiseze in consola "Repetitia 1", "Repetitia 2", ... "Repetitia 7"
// for (let i = 1; i < 8;i += 2) {
//     console.log("Repetitia " + i);
// }

// 20:12
// Ex 2) Folosind un for loop sa se afiseze in consola toate numerele pare de la 6 la 20

// ---------- FOR LOOP in Array -----------
let listaDeCumparaturi = ["Whisky", "Gheata", "Lapte", "Pui", "Vita", "Vodka"]; 

// console.log( listaDeCumparaturi[0] );
// console.log( listaDeCumparaturi[1] );
// console.log( listaDeCumparaturi[2] );
// console.log( listaDeCumparaturi[3] );
// console.log( listaDeCumparaturi[4] );
// console.log( listaDeCumparaturi[5] );

for (let i = 0;i < listaDeCumparaturi.length - 1;i++) {
    console.log( listaDeCumparaturi[i] ); // listaDeCumparaturi[0], listaDeCumparaturi[1], listaDeCumparaturi[2]
}

// ------- Suma numere ------
// 3, 1, 7, 5, 13

// let numbers = [3, 1, 7, 5, 13];
// let sum = 0;
// let produs = 1;

// sum += numbers[0];
// sum += numbers[1];
// sum += numbers[2];
// sum += numbers[3];
// sum += numbers[4];

// for (let i = 0;i < numbers.length;i++) {
//     sum += numbers[i];
//     produs *= numbers[i];
// }

// console.log(sum);
// console.log(produs);

// ------- Suma numere pozitive ------
// 3, -1, 10, 7, -20, -5

// let numbers = [3, -1, 10, 7, -20, -5];
// let sum = 0;

// for (let i = 0;i < numbers.length;i++) {
//     if (numbers[i] > 0) {
//         sum += numbers[i];
//     }
// }

// Timp: 21:01
// Ex 3) Folosind un for loop sa se calculeze suma numerelor negative dintr-un array si produsul numerelor pozitive
// let numbers = [3, -1, 10, 7, -20, -5];
// let sum = 0;
// let product = 1;

// V1
// for (let i = 0;i < numbers.length;i++) {
//     if (numbers[i] < 0) {
//         sum += numbers[i];
//     }
//     if (numbers[i] > 0) {
//         product *= numbers[i];
//     }
// }
// for (let i = 0;i < numbers.length;i++) {
//     if (numbers[i] <= 0) {
//         sum += numbers[i];
//     } else {
//         product *= numbers[i];
//     }
// }

// Ex 4) Folosind un for loop sa se calculeze suma numerelor de pe index par ( 0, 2, 4, .. )
// let numbers = [3, -1, 10, 7, -20, -5]; // 3 + 10 + (-20) = 13 - 20 = -7
//             0  1    2  3   4    5
// let sum = 0;

// repetitia 1: i = 0, i < 6 (true), sum = 0 + numbers[0] = 0 + 3 = 3, i = 2
// repetitia 2: i = 2, i < 6 (true), sum = 3 + numbers[2] = 3 + 10 = 13, i = 4
// repetitia 3: i = 4, i < 6 (true), sum = 13 + numbers[4] = 13 + (-20) = -7, i = 6
// repetitia 4: i = 6, i < 6 (false), se incheie for-ul
// for (let i = 0;i < numbers.length;i += 2) {
//     sum += numbers[i];
// }

// Ex 5) Folosind un for loop sa se calculeze suma numerelor pare
// let numbers = [3, -1, 10, 7, -20, -5]; // 10 + (-20) = -10
// let sum = 0;

// for (let i = 0;i < numbers.length;i++) {
//     if (numbers[i] % 2 === 0) {
//         sum += numbers[i];
//     }
// }

// console.log( 7 % 2 ); // 2 * 3 + 1
// console.log( 7 % 3 ); // 3 * 2 + 1
// console.log( 8 % 3 ); // 3 * 2 + 2

// console.log( 10 % 9 ); // 9 * 1 + 1

// -------------- Array ca parametru al unei functii ---------
// let sayHello = (message) => {
//     console.log(message);
// };

// sayHello( [1, 7, 38, -3] );

// Ex 6) Sa se creeze o functie care calculeaza suma numerelor dintr-un array ( primit ca parametru ), iar apoi o returneaza
let getSum = (numbers) => {
    let sum = 0;

    for (let i = 0;i < numbers.length;i++) {
        sum += numbers[i];
    }

    return sum;
};

let sum = getSum( [1, 7, 38, -3] );

console.log(sum);


