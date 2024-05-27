import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  const getProducts = async () => {
    const serverResponse = await fetch('https://fakestoreapi.com/products');
    const parsedData = await serverResponse.json();

    console.log(parsedData);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = () => {
    setNumber(number + 1);
  }

  return (
   <div>
      <h1>Hey</h1>

      <button onClick={handleClick}> Click me </button>

   </div>
  )
}

export default App
