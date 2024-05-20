// Sa se creeze o funcție care primește ca parametru un array de produse. 
// Funcția sa returneze prețul mediu al produselor.

// https://github.com/Cristian-creator/mentorat-oracle/blob/main/products.js

const getMediumPrice = (products) => {
    let sum = 0;

    // products.forEach((product) => {
    //     sum += product.price;
    // });
    
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    
    return sum / products.length;
}

getMediumPrice(data, 12);

// Sa se creeze o funcție care primește ca parametru un array de produse și un număr 
// reprezentând un id de produs. Funcția sa returneze index-ul produsului, al cărui id îl primim 
// ca parametru, in interiorul array-ului.

const getIndexProdus = (produse, id) => {
    for (let i = 0; i < produse.length; i++) {
        if (produse[i].id === id) {
            return i;
        }
    }
}

const findProductIndex = (products, productId) => products.findIndex(product => product.id === productId);
// const findProductIndex = (products, productId) => products.findIndex(product => product.rating.rate > 4.5);
