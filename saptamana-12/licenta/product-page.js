const getProductData = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get('id');

    const serverResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await serverResponse.json();

    console.log(data);
};

getProductData();