import { useSelector } from 'react-redux';
import s from './GamePage.module.css';

export const GamePage = ({ children }) => {
  const nameX = useSelector(state => state.playerOne.playerName);
  const scoreX = useSelector(state => state.playerOne.playerScore);
  const nameO = useSelector(state => state.playerTwo.playerName);
  const scoreO = useSelector(state => state.playerTwo.playerScore);
  const symbolX = useSelector(state => state.playerOne.playerSymbol);
  const symbolO = useSelector(state => state.playerTwo.playerSymbol);
  const step = useSelector(state => state.step);

  return (
    <div className={s.gameSection}>
      <div className={s.nameSection}>
        <div className={(step + 1) % 2 && s.active}>
          <p>{symbolX}</p>
          <p>{nameX}</p>
          <p>{scoreX}</p>
        </div>
        <div className={step % 2 && s.active}>
          <p>{symbolO}</p>

          <p>{nameO}</p>
          <p>{scoreO}</p>
        </div>
      </div>
      {children}
    </div>
  );
};
