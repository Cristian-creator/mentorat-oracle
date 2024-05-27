import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import dice from '../../assets/dice.svg';

const AdviceCard = (props) => {
    const { handleAddToFavorites, currentAdviceIsAddedToFavorites, advice, isLoading, generateAdvice } = props;

    return (
        <div className='advice-card-container'>
          <button onClick={handleAddToFavorites} className='add-to-favorites-button'>
            {currentAdviceIsAddedToFavorites === true ? (<FavoriteIcon sx={{ color: 'var(--lightGreen)' }} />) : (<FavoriteBorderIcon sx={{ color: 'var(--lightGreen)' }} />) }
          </button>

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
    )
};

export default AdviceCard;