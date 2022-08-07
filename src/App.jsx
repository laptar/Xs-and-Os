import { useRef, useState } from 'react';
import { Provider } from 'react-redux';

import { store } from 'redux/store';
import { PlayingField } from 'components/PlayingField/PlayingField';
import { StartPage } from 'components/StartPage/StartPage';
import { Modal } from 'components/Modal/Modal';

export const App = () => {
  const [firstRender, setFirstRender] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleStartGame = () => {
    setFirstRender(prev => !prev);
  };
  const handleToglModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <Provider store={store}>
      <div className="section">
        {firstRender ? (
          <StartPage onStart={handleStartGame} />
        ) : (
          !showModal && <PlayingField onModal={handleToglModal} />
        )}
        {showModal && (
          <Modal onClose={handleToglModal} onStart={handleStartGame} />
        )}
      </div>
    </Provider>
  );
};
