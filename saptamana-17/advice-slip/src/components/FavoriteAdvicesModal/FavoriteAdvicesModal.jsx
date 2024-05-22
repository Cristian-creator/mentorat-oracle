import './FavoriteAdvicesModal.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const FavoriteAdvicesModal = (props) => {
    return (
        <div className="favorite-advices-modal-container">
            <div className="favorite-advices-modal-card">
                <div className="favorite-advices-modal-title">
                    <AutoAwesomeIcon />
                    <h2> Favorited advices </h2>
                </div>
                <div>
                    {props.advices.map((advice) => (
                        <p key={advice.id}> {advice.content} - {advice.addedAt} </p>
                    ))}
                </div>
            </div>
            <div onClick={props.closeModal} className='favorite-advices-overlay'></div>
        </div>
    )
};

export default FavoriteAdvicesModal;