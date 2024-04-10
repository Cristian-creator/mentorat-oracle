// ------- Setup sidebar -------
const navbarCartIcon = document.querySelector('.navbar-cart-icon');
const sidebar = document.querySelector('.sidebar-container');
const overlay = document.querySelector('.overlay');

const openSidebar = () => {
    sidebar.style.transform = 'translateX(0px)';
    overlay.style.display = 'block';
};

navbarCartIcon.addEventListener('click', openSidebar);

const closeSidebar = () => {
    sidebar.style.transform = 'translateX(110%)';
    overlay.style.display = 'none';
};

overlay.addEventListener('click', closeSidebar);

// ------- Generate cards -------
const productsSection = document.querySelector('.products-section');
const cartProductsSection = document.querySelector('.cart-products-container');

const createProductCards = async () => {
    const serverResponse = await fetch('https://fakestoreapi.com/products');
    const products = await serverResponse.json(); 

    console.log(products);

    products.forEach((product) => {
        const productCardContainer = document.createElement('div');
        productCardContainer.classList.add('product-card-container');

        productCardContainer.innerHTML = `
            <div style="background-image: url('${product.image}');" class="product-card-image"></div>
            <div class="product-card-details">
                <h3> ${product.title} </h3>
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

createProductCards();

let cartProducts = [];

const updateSidebarProducts = () => {
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
                    <button> - </button>
                    <p> ${cartProduct.quantity} </p>
                    <button> + </button>
                </div>
            </div>
            <div style="background-image: url('${cartProduct.image}');" class="cart-product-image"></div>
        `;

        cartProductsSection.appendChild(cartProductContainer);
    });
};

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
};