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
        price: 199,
        name: 'Product X',
        quantity: 2,
    },
    {
        id: 897032,
        price: 50,
        name: 'Product Y',
        quantity: 4,
    },
    {
        id: 3821,
        price: 90,
        name: 'Product Z',
        quantity: 5,
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










let valoareIndexDinArray = (arrayDeNumereImpare) => {
    let maxim = arrayDeNumereImpare[0];
    let index = 0;

    for (let i = 1; i < arrayDeNumereImpare.length; i++) {
        if(maxim < arrayDeNumere[i] && arrayDeNumere[i] % 2 ===1) {
            maxim = arrayDeNumere[i];
            index = i;
        }
    }

    return i;
}

console.log(valoareIndexDinArray([5, 7, 2, 3, 13, 10]));
//                                0  1  2  3   4   5
