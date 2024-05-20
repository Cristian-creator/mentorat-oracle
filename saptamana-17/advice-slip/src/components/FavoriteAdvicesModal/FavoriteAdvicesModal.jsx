import './FavoriteAdvicesModal.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const FavoriteAdvicesModal = (props) => {
    return (
        <div onClick={props.closeModal} className="favorite-advices-modal-container">
            <div className="favorite-advices-modal-card">
                <div className="favorite-advices-modal-title">
                    <AutoAwesomeIcon />
                    <h2> Favorited advices </h2>
                </div>
                <div>
                    {props.advices.map((advice) => (
                        <p> {advice.content} </p>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default FavoriteAdvicesModal;