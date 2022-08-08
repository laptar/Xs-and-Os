import { useSelector, useDispatch } from 'react-redux';
import s from './ChangeSymbol.module.css';

import { changePlayerXAction, changePlayerOAction } from 'redux/actions';

export const ChangeSymbol = ({ onChange }) => {
  const dispatch = useDispatch();
  const playerX = useSelector(state => state.playerOne);
  const playerO = useSelector(state => state.playerTwo);
  const handleNo = () => {
    onChange();
  };
  const handleYes = () => {
    onChange();
    dispatch(changePlayerXAction(playerO));
    dispatch(changePlayerOAction(playerX));
  };
  return (
    <div className={s.section}>
      <div className={s.sectionText}>
        <h3>X</h3>
        <h3>&#8646;</h3>
        <h3>O</h3>
      </div>
      <p>Do you want to change the symbol?</p>

      <div>
        <button type="button" onClick={handleYes}>
          Yes
        </button>
        <button type="button" onClick={handleNo}>
          No
        </button>
      </div>
    </div>
  );
};
