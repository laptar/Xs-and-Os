import { useEffect } from 'react';
import { useState } from 'react';
import s from './PlayingField.module.css';

export const PlayingField = () => {
  const [field, setField] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [winner, setWinner] = useState(null);

  const [activePlayer, ssetActivePlayer] = useState(true);
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

  useEffect(() => {
    winVariant.forEach(el => {
      if (field[el[0]] === field[el[1]] && field[el[0]] === field[el[2]]) {
        console.log(`win ${field[el[0]]}`);
      }
    });
  });

  const playerSymbol = {
    true: 'X',
    false: 'O',
  };
  const handleToglePlayer = () => {
    ssetActivePlayer(prev => !prev);
  };

  const handleOnClick = e => {
    const index = Number(e.target.id);
    if (!e.target.textContent) {
      e.target.textContent = playerSymbol[activePlayer];
      setField(prev => {
        prev[index] = playerSymbol[activePlayer];
        return [...prev];
      });
      handleToglePlayer();
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
