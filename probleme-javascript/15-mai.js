// Sa se creeze o funcție care primește ca parametru un array de numere reprezentând 
// rating-urile unui produs. Funcția sa returneze nota medie de rating. 
// [5, 4, 4, 1, 2, 5, 3] -> 3.4 ( rotunjire la o zecimala )

const media = (numere) => {
    let x = 0;
    for (let i = 0; i < numere.length; i++) {
        x += numere[i];
    }
    return (x / numere.length).toFixed(1);
}

// 6.5 
// 65 / 10 -> 6.5

// 6.75
// 68 / 10 -> 6.8

// 6.75
let aproximativRotunjit = Math.round(aproximativ * 10) / 10;
