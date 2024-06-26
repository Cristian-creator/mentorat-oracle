// ------- Generate cards -------
const productsSection = document.querySelector('.products-section');

const cartProductsSection = document.querySelector('.cart-products-container');

const generateProductCards = (products) => {
    products.forEach((product) => {
        const productCardContainer = document.createElement('div');
        productCardContainer.classList.add('product-card-container');

        productCardContainer.innerHTML = `
            <a href="/product.html?id=${product.id}">
                <div style="background-image: url('${product.image}');" class="product-card-image"></div>
            </a>
            <div class="product-card-details">
                <a class="product-card-link" href="/product.html?id=${product.id}">
                    <h3> ${product.title} </h3>
                </a>
                <p class="product-card-description"> ${product.description} </p>
                <p class="product-card-price"> $${product.price} </p>
            </div>
            <button class="add-to-cart-button"> Add to cart </button>
        `;

        productsSection.appendChild(productCardContainer);

        // setup pentru butonul de "Add to cart"
        const addToCartButton = productCardContainer.querySelector('.add-to-cart-button');

        // addToCartButton.addEventListener('click', addToCart);
        addToCartButton.addEventListener('click', () => {
            const productData = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
            };

            addToCart(productData);

            openSidebar();
        });
    });
};

const createProductCards = async () => {
    const serverResponse = await fetch('https://fakestoreapi.com/products');
    const products = await serverResponse.json(); 

    console.log(products);

    generateProductCards(products);
};

createProductCards();

let cartProducts = [];

const cartTotal = document.querySelector('.cart-total');

const updateSidebarProducts = () => {
    // calculare & update total
    let total = 0;

    for (let i = 0;i < cartProducts.length;i++) {
        total += cartProducts[i].price * cartProducts[i].quantity;
    }

    cartTotal.innerText = total;

    // update pe produsele din sidebar
    cartProductsSection.innerHTML = '';

    cartProducts.forEach((cartProduct) => {
        const cartProductContainer = document.createElement('div');
        cartProductContainer.classList.add('cart-product-container');

        cartProductContainer.innerHTML = `
            <div class="cart-product-details">
                <h3> ${cartProduct.title} </h3>
                <div class="cart-product-price-container">
                    <p> Price: $${cartProduct.price} </p>
                    <p> Total: $${cartProduct.price * cartProduct.quantity} </p>
                </div>
                <div class="cart-product-buttons-container">
                    <button class="remove-from-cart-button-sidebar"> - </button>
                    <p> ${cartProduct.quantity} </p>
                    <button class="add-to-cart-button-sidebar"> + </button>
                </div>
            </div>
            <div style="background-image: url('${cartProduct.image}');" class="cart-product-image"></div>
        `;

        // aici am setat butonul de adaugare cantitate produs
        const addToCartButton = cartProductContainer.querySelector('.add-to-cart-button-sidebar');

        addToCartButton.addEventListener('click', () => {
            const productData = {
                id: cartProduct.id,
                title: cartProduct.title,
                price: cartProduct.price,
                image: cartProduct.image,
            };

            addToCart(productData);
        });

        // aici am setat butonul de scadere cantitate produs
        const removeFromCartButton = cartProductContainer.querySelector('.remove-from-cart-button-sidebar');

        removeFromCartButton.addEventListener('click', () => {
            const productData = {
                id: cartProduct.id,
                title: cartProduct.title,
                price: cartProduct.price,
                image: cartProduct.image,
            };

            removeFromCart(productData);
        });

        cartProductsSection.appendChild(cartProductContainer);
    });
};

const noItemsInCartText = document.querySelector('.no-items-in-cart-text');

const addToCart = (product) => {
    const productIndex = cartProducts.findIndex((cartProduct) => cartProduct.id === product.id);

    if (productIndex === -1) {
        const productData = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        };
        cartProducts.push(productData);
    } else {
        cartProducts[productIndex].quantity = cartProducts[productIndex].quantity + 1;
    }

    console.log('after --------', cartProducts);

    updateSidebarProducts();

    noItemsInCartText.style.display = 'none';
};

const removeFromCart = (product) => {
    const productIndex = cartProducts.findIndex((cartProduct) => cartProduct.id === product.id);

    const productQuantity = cartProducts[productIndex].quantity;

    if (productQuantity === 1) {
        cartProducts.splice(productIndex, 1);
    } else {
        cartProducts[productIndex].quantity = productQuantity - 1;
    }

    updateSidebarProducts();

    if (cartProducts.length === 0) {
        noItemsInCartText.style.display = 'block';
    }
}

// ------- Filters Setup ------
const filterButtons = document.querySelectorAll('.filter-button');
const productsSectionSpinner = document.querySelector('.products-section-spinner');

const filterProducts = async (e) => {
    // afisam loading spinner
    productsSectionSpinner.style.display = 'block';
    // stergem cardurile curente
    productsSection.innerHTML = '';

    // request catre fakestoreapi
    const selectedFilter = e.target.getAttribute('value');

    const url = selectedFilter === 'none' ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${selectedFilter}`; // ternary operator

    const serverResponse = await fetch(url);
    const newProducts = await serverResponse.json();

    console.log(newProducts);

    generateProductCards(newProducts);

    // ascundem loading spinner
    productsSectionSpinner.style.display = 'none';
};

filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', filterProducts);
});

// ------- Search Setup ------
const searchForm = document.querySelector('.search-product-form');
const searchSpinner = document.querySelector('.search-product-spinner');
const searchButtonText = document.querySelector('.search-product-button-text');

const searchProduct = (e) => {
    e.preventDefault();

    // afisam loading spinner & ascundem text buton
    searchSpinner.style.display = 'block';
    searchButtonText.style.display = 'none';

    // luam id-ul introdus de user
    const formData = new FormData(searchForm);
    const productId = formData.get('product-id');

    // request catre fakestoreapi sa obtinem informatii doar despre produsul cu acel id

    // afisam produsul in pagina

    // daca serverul nu a gasit produsul, sa afisam un text "No matches found"
    // hint - vezi pagina de produs

    // ascundem loading spinner & afisam text buton

    console.log(productId);
};

searchForm.addEventListener('submit', searchProduct);