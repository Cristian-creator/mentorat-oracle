import React, { useEffect, useState } from 'react'
import MyHomePageComponent from './MyHomePageComponent';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [number, setNumber] = useState(0);

  const getData = async () => {
    const serverResponse = await fetch('https://fakestoreapi.com/products');
    const parsedData = await serverResponse.json();

    setProducts(parsedData);
  };

  useEffect(() => {
    getData();
  }, [number]);

  const handleClick = () => {
    setNumber(number + 1);
  }

  return (
    <div className='homepage-container'>
        <h1> Welcome to Home page! </h1>
        <p> Subtitle...... </p>
        <button onClick={handleClick}> Refresh data </button>
        <MyHomePageComponent />
        {products.map((product) => (
          <p> {product.title} </p>
        ))}
    </div>
  );
};

export default HomePage;