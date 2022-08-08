import s from './ChangeSymbol.module.css';

export const ChangeSymbol = ({ onChange }) => {
  const handleNo = () => {
    onChange();
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
        <button type="button" onClick={handleNo}>
          Yes
        </button>
        <button type="button" onClick={handleNo}>
          No
        </button>
      </div>
    </div>
  );
};
