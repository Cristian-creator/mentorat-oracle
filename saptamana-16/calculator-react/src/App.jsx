import './App.css'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0); // 8 mai 20:35

  const increaseNumber = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const decreaseNumber = () => {
    setCurrentNumber(currentNumber - 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newNumber = parseInt(formData.get('new-number'));

    setCurrentNumber(newNumber);
  }

  return ( // JSX
    <div>
      {/*  event handler  */}
      <button className='action-button' onClick={increaseNumber} disabled={currentNumber >= 10 ? true : false}> Increase </button>
      <button onClick={decreaseNumber}> Decrease </button>
      <p className={currentNumber >= 5 ? 'green-number' : ''}> {currentNumber} </p>

      <form onSubmit={handleSubmit}>
        <input type='number' name='new-number' />
      </form>
    </div>
  );
}

export default App

// Tema:
// - button pentru reset
// - button pentru inmultire cu 2
// - button pentru impartire cu 2
// - buttonul de decrease sa fie disabled cand cifra este mai mica decat zero
// - sa se afiseze un alert atunci cand cifra introdusa in input este in afara intervalului (-100, 100)
