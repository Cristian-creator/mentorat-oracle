const productCategory = document.querySelector('.product-category');
const productImage = document.querySelector('.product-image');
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const productDescription = document.querySelector('.product-description');

const spinner = document.querySelector('.spinner');

const getProductData = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get('id');

    try {
        const serverResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await serverResponse.json();
        
        console.log(data);

        spinner.style.display = 'none';

        productCategory.style.display = 'block';
        productCategory.innerText = data.category;
        productImage.style.backgroundImage = `url('${data.image}')`;
        productName.innerText = data.title;
        productPrice.innerText = `$${data.price}`;
        productDescription.innerText = data.description;

    } catch(error) {
        // redirect to 404
        window.location.replace("http://127.0.0.1:5500/404.html");
    }

};

getProductData();