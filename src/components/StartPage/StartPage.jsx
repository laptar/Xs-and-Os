import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNameXAction, addNameOAction } from 'redux/actions';

export const StartPage = ({ onStart }) => {
  const dispatch = useDispatch();
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  const inputName = {
    X: setPlayerX,
    O: setPlayerO,
  };

  const handleChangeInp = e => {
    inputName[e.target.name](e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (playerX && playerO) {
      dispatch(addNameXAction(playerX));
      dispatch(addNameOAction(playerO));

      onStart();
    } else {
      alert('Please enter Name');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Player"X"
          <input name="X" value={playerX} onChange={handleChangeInp} />
        </label>
        <label>
          Player"O"
          <input name="O" value={playerO} onChange={handleChangeInp} />
        </label>
        <button type="submit">START</button>
      </form>
    </div>
  );
};
