//це головний редюсер який підключається в index.js

import { createStore, combineReducers } from 'redux'; //імпортуємо методи для створення стору і щоб комбінувати редюсери
import { cashReducer } from './cashReducer'; //імпортуємо один редюсер
import { customerReducer } from './customerReducer'; //імпортуємо другий редюсер
import { composeWithDevTools } from '@redux-devtools/extension'; //імпортуємо redux-devtools-extension щоб можна було його юзать

const rootReducer = combineReducers({//створюємо головний редюсер з будь-яким іменем і викликаємо функцію для поєднання інших редюсерів
  cashReducer, //перший редюсер
  customerReducer //другий редюсер
})

export const store = createStore(rootReducer, composeWithDevTools()) //експортуємо і створюємо сам store і передаємо в нього головний редюсер і функцію виклику redux-devtools-extension

  