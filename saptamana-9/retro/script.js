// Uncaught TypeError: Assignment to constant variable
// const x = 5;

// x = 10;

// x = 12;

// x = 0;

// ---------------- Obiectul ---------------
const eventName = 'My tech Event';
const numberOfParticipants = 412;
const eventLocation = 'Bucharest';
const isOnline = false;

// Q: cum arata un obiect?
const myEvent = {
    name: 'My tech Event',
    numberOfParticipants: 412,
    isOnline: false,
    location: {
        city: 'Bucharest',
        street: 'Lascar Catargiu',
        number: 89,
    },
    numberOfAvailableTickets: 20,
};

console.log( myEvent );

// Q: ce este obiectul?
// A: un tip de data din javascript

// Q: cum identificam un obiect?
// A: identificam un obiect daca dupa egal vedem {

// Q: ce contine un obiect?
// A: contine perechi key - value separate prin :

// Q: ce keys poti folosi?
// A: poti adauga oricate keys vrei - de la zero la infinit
const a = {}; // empty object

// Q: ce values poti pune pe un key?
// A: poti folosi orice tip de data

// !!!!! IMPORTANT !!!!
// - la sfarsitul fiecarei perechi key-value punem virgula
// - perechile key-value le denumim properties

// Q: cum pot sa modific valoarea unei proprietati
// A: scrii numele obiectului, adaugi punct, iar apoi scrii 
/// numele proprietatii, adaugi egal si apoi noua valoare
myEvent.isOnline = true;

myEvent.name = 'My tech Event 2024';

myEvent.description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam esse explicabo maiores numquam facilis pariatur adipisci officia ab fuga totam!';

console.log( myEvent );
console.log( myEvent.name );
console.log( myEvent.numberOfParticipants );
console.log( myEvent.location.street );
console.log( myEvent.location.city );

// Timp: 19:33
// Ex 1) Sa se creeze un obiect care contine proprietati despre un produs.
// Ca numar de proprietati sa fie 4 - o proprietate sa aiba ca valoare string, una sa aiba number, una boolean si una obiect

const cartProducts = [
    {
        id: 83172,
        price: 549,
        name: 'Product A',
        quantity: 2,
        category: "jewelery",
    },
    {
        id: 897032,
        price: 100,
        name: 'Product B',
        quantity: 4,
        category: "electronics",
    },
    {
        id: 3821,
        price: 90,
        name: 'Product C',
        quantity: 1,
        category: "women-clothing",
    },
    {
        id: 319,
        price: 30,
        name: 'Product D',
        quantity: 2,
        category: "women-clothing",
    },
    {
        id: 9342,
        price: 2000,
        name: 'Product E',
        quantity: 1,
        category: "jewelery",
    },
    {
        id: 8,
        price: 180,
        name: 'Product F',
        quantity: 2,
        category: "electronics",
    },
];

// Ex 2) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze suma totala de plata

// Tema: pe fiecare pret sa se adauge si TVA 19%

const getCartTotal = (arrayOfProducts) => {
    let total = 0;

    for (let i = 0;i < arrayOfProducts.length;i++) {
        const productPrice = arrayOfProducts[i].price * arrayOfProducts[i].quantity;
        total += productPrice;
    }

    return total;
};

console.log( getCartTotal(cartProducts) );

// Ex 3) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze "Ai livrare gratuita" daca totalul de plata este mai mare
// decat 300, in caz contrar sa returneze "Mai adauga produse in cos in valoarea
/// de X lei ca sa ai livrare gratuita"

const getDeliveryMessage = (arrayOfProducts) => {
    let total = 0;

    for (let i = 0;i < arrayOfProducts.length;i++) {
        const productPrice = arrayOfProducts[i].price * arrayOfProducts[i].quantity;
        total += productPrice;
    }

    if (total > 300) {
        return "Ai livrare gratuita";
    } else {
        // totalul = 200
        // 300
        const remainingValue = 300 - total;
        return `Mai adauga produse in cos in valoarea de ${remainingValue} lei ca sa ai livrare gratuita`;
    }

};

// alert( getDeliveryMessage(cartProducts) );

// Ex 3) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze "Mai adauga produse in cos" daca numarul de produse din cos
// este mai mic decat 3 ( inclusiv ), daca numarul de produse din cos este
// mai mare decat 10 sa se returneze "Mai scoate din produse", in caz contrar
// sa se returneze "Poti finaliza comanda"

const getProductsMessage = (arrayOfProducts) => {
    let sum = 0;

    for (let i = 0;i < arrayOfProducts.length;i++) {
        sum += arrayOfProducts[i].quantity;
    }

    if (sum <= 3) {
        return "Mai adauga produse in cos";
    }

    if (sum > 10) {
        // sum = 14
        // 10
        const numberOfProductsToRemove = sum - 10;
        // Tema: daca mai trebuie sters un singur produs atunci sa se returneze
        // "Mai scoate un produs". In caz contrar sa se returneze "Mai scoate X produse"
        return `Mai scoate ${numberOfProductsToRemove} produse`;
    }

    return "Poti finaliza comanda";
};

// Ex 4) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze "Ai livrare gratuita daca cumperi 5 bucati din produsul Z"

// alert( getProductsMessage( cartProducts ) );

// --------------------  JS in Browser ------------------

// concatenare
// document.querySelector('.page-title').innerText = document.querySelector('.page-title').innerText + '!';

// backticks
const title = document.querySelector('.page-title');
title.innerText = `NOU!!!!!!${title.innerText}!`;
title.innerText = 'oi32n312nj312';

// cand schimbam o proprietate de CSS folosind javascript intotdeauna scriem .style, 
// apoi punct + numele proprietatii scris in camel case
title.style.fontSize = '48px';
title.style.color = 'blue';
title.style.backgroundColor = 'pink';

const sayHello = () => {
    title.innerText = 'hello!!';
    alert('Hello!!!!!');
};

title.addEventListener('click', sayHello);


// Ex 1) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze suma totala de plata. Pretul fiecarui produs sa includa si TVA 19%

// Ex 2) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze "Ai livrare gratuita daca cumperi 5 bucati din produsul Z"

// Ex 3) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze suma totala a produselor care au pretul mai mare decat 80.

// Ex 4) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze numarul total de tipuri de produse din cos

// ---- De aici incolo folositi array-ul de produse lasat mai jos (puteti sa modificati datele, structura e importanta)

// Ex 5) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze numarul total de produse din cos care sunt din categoria 'jewelery'

// Ex 6) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Ai cumparat produse din categoria de bijuterii in valoare de X lei"

const getJeweleryTotalAmountToBePaid = (products) => {
    let sum = 0;

    for (let i = 0;i < products.length;i++) {
        if (products[i].category === 'jewelery') {
            sum += products[i].quantity * products[i].price;
        }
    }

    return `Ai cumparat produse din categoria de bijuterii in valoare de ${sum} lei`;
};

// Ex 7) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Cel mai scump produs pe care l-ai selectat este X, ai comandat o cantitate de Y si vei plati Z lei"

const getMaximumValue = (arrayOfNumbers) => {
    let max = arrayOfNumbers[0];

    for (let i = 1;i < arrayOfNumbers.length;i++) {
        if (arrayOfNumbers[i] > max) {
            max = arrayOfNumbers[i];
        }
    }

    return max;
};

const numbers = [1, 0, 84, 2, 9, 37];

getMaximumValue(numbers);

// varianta 1
// const getTheMostExpensiveProduct = (products) => {
//     let max = products[0].price;

//     for (let i = 1;i < products.length;i++) {
//         if (products[i].price > max) {
//             max = products[i].price;
//         }
//     }

//     for (let i = 0;i < products.length;i++) {
//         if (products[i].price === max) {
//             return `Cel mai scump produs pe care l-ai selectat este ${products[i].name}, ai comandat o cantitate de ${products[i].quantity} si vei plati ${products[i].price * products[i].quantity} lei`;
//         }
//     }
// };

const getTheMostExpensiveProduct = (products) => {
    let max = products[0].price;
    let indexOfMax = 0;

    for (let i = 1;i < products.length;i++) {
        if (products[i].price > max) {
            max = products[i].price;
            indexOfMax = i;
        }
    }

    // Q: cum accesez valoarea unui element dintr-un array?
    // A: pe baza index-ului

    return `Cel mai scump produs pe care l-ai selectat este ${products[indexOfMax].name}, ai comandat o cantitate de ${products[indexOfMax].quantity} si vei plati ${products[indexOfMax].price * products[indexOfMax].quantity} lei`;
};

getTheMostExpensiveProduct(cartProducts);

// Ex 8) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Cel mai ieftin produs pe care l-ai selectat are id-ul X"

const getTheMostCheapestProduct = (products) => {
    let min = products[0].price;
    let indexOfMin = 0;

    for (let i = 1;i < products.length;i++) {
        if (products[i].price < min) {
            min = products[i].price;
            indexOfMin = i;
        }
    }

    return `Cel mai ieftin produs pe care l-ai selectat are id-ul ${products[indexOfMin].id}`;
};

// Ex 9) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze mesajul "Ai castigat o bratara" daca suma produselor din categoria "women-clothing" depaseste 300

const getTotalOfWomenClothingProducts = (products) => {
    let sum = 0;

    for (let i = 0;i < products.length;i++) {
        if (products[i].category === 'women-clothing') {
            sum += products[i].quantity * products[i].price;
        }
    }

    if (sum > 300) {
        return 'Ai castigat o bratara';
    }
};

console.log( getTotalOfWomenClothingProducts(cartProducts) );

// Ex 4) Sa se creeze o functie care primeste ca parametru un array de produse
// Functia sa returneze numarul total de categorii din cos

const getNumberOfCategories = (products) => {
    let uniqueCategories = [];

    for (let i = 0;i < products.length;i++) {
        if (uniqueCategories.includes(products[i].category) === false) {
            uniqueCategories.push(products[i].category);
        }
    }

    return uniqueCategories.length;
};
