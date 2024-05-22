import { useState } from "react"

const App = () => {
  const [number, setNumber] = useState(0);

  const handleIncrementNumber = () => {
    setNumber(number + 1);
  };
  
  console.log("number: ", number);

  let numberTwo = 0;

  const handleIncrementNumberTwo = () => {
    numberTwo++;
    console.log('mesaj din functie ---- ', numberTwo);
  }
  
  console.log("numberTwo: ", numberTwo);

  return (
    <div>

      <button onClick={handleIncrementNumber}> Increment State </button>
      {/* <p> {number} </p> */}

      <button onClick={handleIncrementNumberTwo}> Increment Non-State </button>
      <p> {numberTwo} </p>

    </div>
  );
}

export default App
