// 1) Creează o funcție care primește ca parametru un array și 
// returnează suma numerelor pare din el
const sumaNumerePare = (arrayDeNumere) => {
    // arrayDeNumere = [5, 3, 10]
    let suma = 0;

    // suma += arrayDeNumere[0]
    // suma += arrayDeNumere[1]
    // suma += arrayDeNumere[2]
    // i = 0, i < 3 ( true ), suma = 5, i = 1
    // i = 1, i < 3 ( true ), suma = 8, i = 2
    // i = 2, i < 3 ( true ), suma = 18, i = 3
    // i = 3, i < 3 ( false )
    for(let i = 0;i < arrayDeNumere.length;i++) {
        if (arrayDeNumere[i] % 2 === 0) {
            suma += arrayDeNumere[i];
        }
    }

    return suma;
};

let array = [5, 3, 10];

// console.log( sumaNumerePare(array) );
// console.log( sumaNumerePare([8, 12]) );

// 2) Creează o funcție care primește ca parametru un array și
// returnează suma numerelor impare și pozitive din el
const sumaNumereImpareSiPozitive = (numere) => {
    let suma = 0;

    for(let i = 0;i < numere.length;i++) {
        // varianta 1
        if (numere[i] % 2 === 1 && numere[i] > 0) {
            suma += numere[i];
        }
        // varianta 2
        // if (numere[i] > 0) {
        //     if (numere[i] % 2 === 1) {
        //         suma += numere[i];
        //     }
        // }
    }

    return suma;
};

// console.log( sumaNumereImpareSiPozitive([5, 4, -2, -5, 9]) );

// 3) Creează o funcție care primește ca parametru un array și 
// returnează diferența dintre suma numerelor pare și 
// suma numerelor impare
const diferentaSumaNumerePareSiNumereImpare = (numere) => {
    let sumaNumereImpare = 0;
    let sumaNumerePare = 0;
    // sumaNumereImpare = suma - sumaNumerePare
    // sumaNumerePare - sumaNumereImpare
    // sumaNumerePare - (suma - sumaNumerePare)

    for(let i = 0;i < numere.length;i++) {
        // varianta 1
        // if (numere[i] % 2 === 1) {
        //     sumaNumereImpare += numere[i];
        // }
        // if (numere[i] % 2 === 0) {
        //     sumaNumerePare += numere[i];
        // }
        // varianta 2
        if (numere[i] % 2 === 1) {
            sumaNumereImpare += numere[i];
        } else {
            sumaNumerePare += numere[i];
        }
        // varianta 3
        // suma += numere[i];

        // if (numere[i] % 2 === 0) {
        //     sumaNumerePare += numere[i];
        // }
    }

    return sumaNumerePare - sumaNumereImpare;
};

// Creează o funcție care primește ca parametru un array de 
// string-uri și returnează suma caracterelor. 
// De exemplu: [“Cristian”, “SkillBrain!”, “dEv”] -> 8 + 11 + 3 = 22

const sumaCaractereDinArray = (arrayDeStringuri) => {
    // arrayDeStringuri = ["Cristian", "SkillBrain!", "dEv"]
    let suma = 0;

    // i < 3
    // i = 0, suma += arrayDeStringuri[0].length
    // i = 1, suma += arrayDeStringuri[1].length
    // i = 2, suma += arrayDeStringuri[2].length
    // i = 3, STOP
    for(let i = 0;i < arrayDeStringuri.length;i++) {
        suma += arrayDeStringuri[i].length;
    }

    return suma;
};

console.log( sumaCaractereDinArray(["Cristian", "SkillBrain!", "dEv"]) );

// Creează o funcție care primește ca parametru un array de 
// string-uri și returnează suma caracterelor elementelor care au
// minim 4 caractere
// De exemplu: [“Cristian”, “SkillBrain!”, “dEv”] -> 8 + 11 = 19

const sumaCaractereDinArrayDoi = (arrayDeStringuri) => {
    let suma = 0;

    for(let i = 0;i < arrayDeStringuri.length;i++) {
        if (arrayDeStringuri[i].length > 4) {
            suma += arrayDeStringuri[i].length;
        }
    }

    return suma;
};

console.log( sumaCaractereDinArrayDoi(["Cristian", "SkillBrain!", "dEv"]) );

// Creează o funcție care primește ca parametru un array de 
// diverse elemente și returnează suma caracterelor
// De exemplu: [“Cristian”, 5, true, false, “SkillBrain!”, “dEv”] -> 8 + 11 = 19
const sumaCaractereDinArrayTrei = (arrayDeStringuri) => {
    let suma = 0;

    for(let i = 0;i < arrayDeStringuri.length;i++) {
        /* arrayDeStringuri[i] este string */
        if ( typeof arrayDeStringuri[i] === "string" ) {
            suma += arrayDeStringuri[i].length;
        }
    }

    return suma;
};

console.log( sumaCaractereDinArrayTrei(["Cristian", 5, true, false, "SkillBrain!", "dEv"]) );

// Creează o funcție care primește ca parametru un array de 
// diverse elemente și returnează true daca string-ul "SkillBrain"
// se afla in array. In caz contrar returneaza false
const gasesteCuvantInArray = (arrayElemente) => {
    // parcurgem array-ul si pentru fiecare element trebuie sa
    // verificam daca el este egal cu string-ul "SkillBrain"
    for(let i = 0;i < arrayElemente.length;i++) {
        if (arrayElemente[i] === "SkillBrain!") {
            return true;
        }
    }
    return false;
};

const gasesteCuvantInArrayVariantaDoi = (arrayElemente) => {
    let rezultat = false;

    for(let i = 0;i < arrayElemente.length;i++) {
        if (arrayElemente[i] === "SkillBrain!") {
            rezultat = true;
        }
    }

    return rezultat;
};

console.log( gasesteCuvantInArrayVariantaDoi([ "Cristian", 5, true, "SkillBrain!", false, "dEv"]) );

// Creează o funcție care primește ca parametru un array de 
// diverse elemente si un al doilea parametru reprezentand un string.
// Functia sa returneaze true daca array-ul contine valoarea celui
// de-al doilea parametru, iar in caz contrar sa returneze false

const gasesteStringInArray = (arrayElementeUnu, stringCautat) => {
    // arrayElementeUnu = [5, "Cristian", "SkillBrain", "a", "d"]
    // stringCautat = "Cristian"
    let rezultat = false;

    // i = 0, i < 5 (true), 
    for(let i = 0;i < arrayElementeUnu.length;i++) {
        if (arrayElementeUnu[i] === stringCautat) {
            rezultat = true;
        }
    }

    return rezultat;
};

console.log( gasesteStringInArray([5, "Cristian", "SkillBrain", "a", "d"], "Cristian") );
// console.log( gasesteStringInArray(["Catalina", "SkillBrain"], "") );

// Sa se creeze o functie care primeste ca parametru un array de numere.
// Functia sa returneze cel mai mare numar din array

const gasesteCelMaiMareNumarDinArray = (arrayDeNumere) => {
    let maxim = arrayDeNumere[0];

    for (let i = 1;i < arrayDeNumere.length;i++) {
        if (maxim < arrayDeNumere[i]) {
            maxim = arrayDeNumere[i];
        }
    }

    return maxim;
};

console.log( gasesteCelMaiMareNumarDinArray([5, 7, 1, 2, 10]) );

// Sa se creeze o functie care primeste ca parametru un array de numere.
// Functia sa returneze cel mai mic numar din array

const gasesteCelMaiMicNumarDinArray = (arrayDeNumere) => {
    let minim = arrayDeNumere[0];

    for (let i = 1;i < arrayDeNumere.length;i++) {
        if (minim > arrayDeNumere[i]) {
            minim = arrayDeNumere[i];
        }
    }

    return minim;
};

console.log( gasesteCelMaiMicNumarDinArray([5, 7, 1, 2, 10]) );

// Sa se creeze o functie care primeste ca parametru un array de numere.
// Functia sa returneze numarul de aparitii al cifrei zero

const gasesteNumarulDeAparitiiAlLuiZeroInArray = (numere) => {
    let aparitii = 0;

    for (let i = 0;i < numere.length;i++) {
        if (numere[i] === 0) {
            aparitii++; // aparitii += 1; // aparitii = aparitii + 1;
        }
    }

    return aparitii;
};

console.log( gasesteNumarulDeAparitiiAlLuiZeroInArray([5, 0, 1, 2, 10, 0]) );

// Sa se creeze o functie care primeste ca parametru un array de numere.
// Functia sa returneze numarul de aparitii al cifrei zero

const gasesteNumarulDeAparitiiAlLuiZeceInArray = (numere) => {
    let aparitii = 0;

    for (let i = 0;i < numere.length;i++) {
        if (numere[i] === 10) {
            aparitii++; // aparitii += 1; // aparitii = aparitii + 1;
        }
    }

    return aparitii;
};

console.log( gasesteNumarulDeAparitiiAlLuiZeceInArray([5, 0, 1, 2, 10, 0]) );

