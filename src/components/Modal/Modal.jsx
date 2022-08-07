import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import s from './Modal.module.css';
import {
  resetWinnerAction,
  resetFieldAction,
  resetPlayerOneAction,
  resetPlayerTwoAction,
} from 'redux/actions';

export const Modal = ({ onClose, onStart }) => {
  const dispatch = useDispatch();
  // const nameX = useSelector(state => state.playerOne.playerName);
  // const scoreX = useSelector(state => state.playerOne.playerScore);
  // const nameO = useSelector(state => state.playerTwo.playerName);
  // const scoreO = useSelector(state => state.playerTwo.playerScore);
  const winner = useSelector(state => state.winner);

  const handleContinue = () => {
    dispatch(resetWinnerAction());
    dispatch(resetFieldAction());
    onClose();
  };
  const handleEndGame = () => {
    handleContinue();
    dispatch(resetPlayerOneAction());
    dispatch(resetPlayerTwoAction());
    onStart();
  };

  return (
    <div className={s.overlay} data-overlay>
      <div className={s.modal}>
        <h2>{winner}</h2>
        <div>
          <button type="button" onClick={handleContinue}>
            Continue
          </button>
          <button type="button" onClick={handleEndGame}>
            EndGame
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  imgUrl: PropTypes.string,
};
