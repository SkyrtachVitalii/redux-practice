import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; //імпортуємо Provider щоб створити стор для всього додатку
import { store } from './store'; //імпортуємо стор з усіма редюсерами

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/*обгортаємо App провайдером і предаємо як аргумент store раніше імпортований стор*/}
      <App />
    </Provider>
  </React.StrictMode>
);
