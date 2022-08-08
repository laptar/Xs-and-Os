import { useState } from 'react';
import { Provider } from 'react-redux';
import { useCallback } from 'react';

import { store } from 'redux/store';
import { PlayingField } from 'components/PlayingField/PlayingField';
import { StartPage } from 'components/StartPage/StartPage';
import { Modal } from 'components/Modal/Modal';
import { GamePage } from 'components/GamePage/GamePage';
import { ChangeSymbol } from 'components/ChangeSymbol/ChangeSymbol';

export const App = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [fieldBool, setField] = useState(true);
  const handleTogleField = () => {
    setField(prev => !prev);
  };

  const handleStartGame = () => {
    setFirstRender(prev => !prev);
  };
  const handleToglModal = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);
  return (
    <Provider store={store}>
      <div className="section">
        {firstRender ? (
          <StartPage onStart={handleStartGame} />
        ) : (
          <GamePage>
            {fieldBool ? (
              <PlayingField onModal={handleToglModal} />
            ) : (
              <ChangeSymbol onChange={handleTogleField} />
            )}
          </GamePage>
        )}
        {showModal && (
          <Modal
            onClose={handleToglModal}
            onStart={handleStartGame}
            onChange={handleTogleField}
          />
        )}
      </div>
    </Provider>
  );
};
