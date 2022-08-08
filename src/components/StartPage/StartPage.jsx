import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './StartPage.module.css';

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
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span className={s.name}> Player X</span>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            name="X"
            value={playerX}
            placeholder="Player X name"
            onChange={handleChangeInp}
          />
        </label>
        <label className={s.label}>
          <span className={s.name}> Player O</span>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            name="O"
            value={playerO}
            placeholder="Player O name"
            onChange={handleChangeInp}
          />
        </label>
        <button className={s.submit} type="submit">
          START
        </button>
      </form>
    </div>
  );
};
// className={s.input}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search movies"
