import s from './ButtonXO.module.css';
const handleOnClick = e => {
  console.log(e);
};

export const ButtonXO = () => {
  return <button className={s.btn} onClick={handleOnClick}></button>;
};
