// "foarfeca", "piatra", "hartie"
// -> "Player 1 a castigat"
// -> "Player 2 a castigat"
// -> "Egalitate"
const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Egalitate";
    }
    // varianta 2
    if(p1 === 'foarfeca') {
        if (p2 === 'hartie') {
            return 'Player 1 a castigat';
        }
        if (p2 === 'piatra') {
            return 'Player 2 a castigat'
        }
    } else if (p1 === 'piatra') {
        if (p2 === 'hartie') {
            return 'Player 2 a castigat';
        }
        if (p2 === 'foarfeca') {
            return 'Player 1 a castigat'
        }
    } else {
        if (p2 === 'piatra') {
            return 'Player 1 a castigat';
        }
        if (p2 === 'foarfeca') {
            return 'Player 2 a castigat'
        }
    }

    // varianta 1 - scriem fiecare combinatie
    // if (p1 === "foarfeca" && p2 === 'hartie') {
    //     return "Player 1 a castigat";
    // }
    // if (p1 === "hartie" && p2 === 'foarfeca') {
    //     return "Player 2 a castigat";
    // }
    // ....
};

const rezultat = rps("foarfeca", "piatra");

console.log(rezultat);