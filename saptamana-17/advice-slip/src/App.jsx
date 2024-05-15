import { useState } from 'react';
import './App.css';
import dice from './assets/dice.svg';

const App = () => {
  const [advice, setAdvice] = useState({
    id: 117,
    content: 'It it easy to sit up and take notice, what`s difficult is getting up and taking action.'
  }); // hook
  const [isLoading, setIsLoading] = useState(false);

  const generateAdvice = async () => {
    setIsLoading(true);

    const serverResponse = await fetch('https://api.adviceslip.com/advice');
    const data = await serverResponse.json();

    setIsLoading(false);

    setAdvice({
      id: data.slip.id,
      content: data.slip.advice
    });
  };

  return (
    <div className='app-container'>
        <div className='advice-card-container'>
          <p className='advice-id'> ADVICE #{advice.id} </p>
          <p className='advice-content'> “{advice.content}” </p>

          {/* --- separator --- */}
          <div className='separator-container'>
            <hr className='horizontal-line' />
            <div className='vertical-lines-container'>
              <div className='vertical-line' />
              <div className='vertical-line' />
            </div>
            <hr className='horizontal-line' />
          </div>

          <button disabled={isLoading === true ? true : false} onClick={generateAdvice} className='generate-advice-button'>
            {isLoading === true ? (<div className="spinner"></div>) : (<img src={dice} />)}
          </button>
        </div>
    </div>
  );
}

export default App
