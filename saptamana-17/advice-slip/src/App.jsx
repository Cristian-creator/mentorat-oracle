import { useState } from 'react';
import './App.css';
import { initialAdvice } from './initialAdvice';
import FavoriteAdvicesModal from './components/FavoriteAdvicesModal/FavoriteAdvicesModal';
import AdviceCard from './components/AdviceCard/AdviceCard';

const App = () => {
  const [advice, setAdvice] = useState(initialAdvice); // hook
  const [isLoading, setIsLoading] = useState(false);

  const favoriteAdvicesFromLocalStorage = JSON.parse(localStorage.getItem('favoriteAdvicesLS'));
  const initialFavoriteAdvices = favoriteAdvicesFromLocalStorage === null ? [] : favoriteAdvicesFromLocalStorage;

  const [favoriteAdvices, setFavoriteAdvices] = useState(initialFavoriteAdvices);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const currentAdviceIsAddedToFavorites = favoriteAdvices.findIndex((favoriteAdvice) => favoriteAdvice.id === advice.id) === -1 ? false : true;

  const generateAdvice = async () => {
    setIsLoading(true);
    
    try {
      // block-scoped variables
      const serverResponse = await fetch('https://api.adviceslip.com/advice');
      const { slip: { id, advice } } = await serverResponse.json();

      setAdvice({
        id,
        content: advice
      });
    } catch(e) {
      alert('An error occured, try again later.');
    } finally {
      setIsLoading(false);
    }

  };

  const handleAddToFavorites = () => {
    const indexOfCurrentAdvice = favoriteAdvices.findIndex((favoriteAdvice) => favoriteAdvice.id === advice.id);

    if (indexOfCurrentAdvice === -1) {
      // adaugam advice-ul la favorite
      // mereu cand avem in state o variabila egala cu un obiect sau un array trebuie sa:
      // 1. cream un nou obiect / array in care copiem continutul variabilei
      const newFavoriteAdvices = [ ...favoriteAdvices ];
      // 2. modificam noul obiect / array cum vrem noi
      const d = new Date();
      const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
      const month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
      const year = d.getFullYear();
      const hour = d.getHours();
      const minutes = d.getMinutes();
      const currentDateFormatted = `${day}/${month}/${year} ${hour}:${minutes}`; // 27/05/2024
      const newAdvice = {
        ...advice,
        addedAt: currentDateFormatted
      };
      newFavoriteAdvices.push(newAdvice);
      // 3. adaugam noul obiect / array in state
      setFavoriteAdvices(newFavoriteAdvices);
      localStorage.setItem('favoriteAdvicesLS', JSON.stringify(newFavoriteAdvices));
    } else {
      // eliminam advice-ul de la favorite
      const newFavoriteAdvices = [ ...favoriteAdvices ];
      newFavoriteAdvices.splice(indexOfCurrentAdvice, 1);
      setFavoriteAdvices(newFavoriteAdvices);
      localStorage.setItem('favoriteAdvicesLS', JSON.stringify(newFavoriteAdvices));
    }
  }

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  // cand o functie este creata intr-o componenta, ea nu poate fi exportata
  // cand o functie contine ceva din state-ul componentei atunci nu putem o scoatem din componenta
  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className='app-container'>
        <button onClick={handleOpenModal} className='show-favorites-button'> Show favorites </button>

        {modalIsOpen === true ? (<FavoriteAdvicesModal closeModal={handleCloseModal} advices={favoriteAdvices} />) : null}

        <AdviceCard 
          handleAddToFavorites={handleAddToFavorites}
          currentAdviceIsAddedToFavorites={currentAdviceIsAddedToFavorites}
          advice={advice}
          isLoading={isLoading}
          generateAdvice={generateAdvice}
        />
    </div>
  );
}

export default App
