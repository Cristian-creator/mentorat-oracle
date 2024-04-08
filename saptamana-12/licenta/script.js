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
    sidebar.style.transform = 'translateX(332px)';
    overlay.style.display = 'none';
};

overlay.addEventListener('click', closeSidebar);

// ------- Generate cards -------
const productsSection = document.querySelector('.products-section');

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
                <p class="product-card-price"> $100 </p>
            </div>
            <button class="add-to-cart-button"> Add to cart </button>
        `;

        productsSection.appendChild(productCardContainer);
    });

};

createProductCards();
