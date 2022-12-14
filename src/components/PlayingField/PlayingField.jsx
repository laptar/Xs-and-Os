import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import s from './PlayingField.module.css';
import {
  changeWinnerAction,
  addWinXAction,
  addWinOAction,
  addNewStepAction,
  nextStepAction,
} from 'redux/actions';

export const PlayingField = ({ onModal }) => {
  const dispatch = useDispatch();
  const playerX = useSelector(state => state.playerOne);
  const playerO = useSelector(state => state.playerTwo);
  // const nameX = useSelector(state => state.playerOne.playerName);
  // const scoreX = useSelector(state => state.playerOne.playerScore);
  // const nameO = useSelector(state => state.playerTwo.playerName);
  // const scoreO = useSelector(state => state.playerTwo.playerScore);
  const winner = useSelector(state => state.winner);
  const field = useSelector(state => state.field);
  const step = useSelector(state => state.step);

  // const step = useRef(0);
  const winVariant = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const players = {
    1: playerX,
    0: playerO,
  };

  useEffect(() => {
    const addWin = {
      1: addWinXAction,
      0: addWinOAction,
    };
    if (winner) {
      onModal();
      if (winner !== 'nichyia') {
        dispatch(addWin[step % 2]());
      }
    }
  }, [winner, dispatch, onModal, step]);

  useEffect(() => {
    if (!winner) {
      const winTest = winVariant.reduce((acc, el) => {
        if (field[el[0]] === field[el[1]] && field[el[0]] === field[el[2]]) {
          acc = field[el[0]];
        }
        return acc;
      }, '');
      if (winTest) {
        dispatch(changeWinnerAction(players[step % 2].playerName));
      } else if (step === 9) {
        dispatch(changeWinnerAction('nichyia'));
      }
    }
  });

  const handleToglePlayer = () => {
    dispatch(nextStepAction());
  };

  const handleOnClick = e => {
    if (!e.target.textContent) {
      const index = Number(e.target.id);
      const symbol = players[(step + 1) % 2].playerSymbol;
      handleToglePlayer();

      e.target.textContent = players[(step + 1) % 2].playerSymbol;
      dispatch(addNewStepAction({ index, symbol }));
    }
  };

  return (
    <div className={s.field}>
      <table>
        <tbody onClick={handleOnClick}>
          <tr>
            <td id="0"></td>
            <td id="1"></td>
            <td id="2"></td>
          </tr>
          <tr>
            <td id="3"></td>
            <td id="4"></td>
            <td id="5"></td>
          </tr>
          <tr>
            <td id="6"></td>
            <td id="7"></td>
            <td id="8"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
