import { ButtonXO } from 'components/Button-xo/ButtonXO';
import { PlayingField } from 'components/PlayingField/PlayingField';
export const App = () => {
  return (
    <div className="section">
      <PlayingField btn={<ButtonXO />} />
    </div>
  );
};
