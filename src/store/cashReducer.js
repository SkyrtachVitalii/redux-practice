const myState = {                 //ініціалізація початкового стейту який буде використовуватись для роботи
  cash: 5,
}

const ADD_CASH = "ADD_CASH";      //для відсіювання помилок action можна записати в змінні і далі використовувати їх в будь-якій частині редюсера
const GET_CASH = "GET_CASH";

export const cashReducer = (state = myState, action) => { //безпосередньо сам редюсер який приймає початковий стейт
  switch (action.type) {                                  // і дані які приходять для обробки (тип action і дані які
    case ADD_CASH:                                        //відповідають вказаному типу action
      return { ...state, cash: state.cash + action.payload } 
    case GET_CASH:                                          //тип action відповідно якого буде виконуватися обробка даних з action.payload
      return { ...state, cash: state.cash - action.payload }// сама обробка payload, завжди повертається старе значення ...state і додається зміна старого значення
    default:                                                //за замовчуванням завжди має повертатися state
      return state; 
  }
}

export const addCashAction = (payload) => ({ //функція action.Creator яка одразу збирає об'єкт
  type: ADD_CASH,                            // з полями type і payload для подальшої обробки редюсером
  payload                                    //вона викликається в обробнику який викликає dispatch і передає їй payload
})

export const getCashAction = (payload) => ({//функція action.Creator яка одразу збирає об'єкт
  type: GET_CASH,                           // з полями type і payload для подальшої обробки редюсером
  payload                                   //вона викликається в обробнику який викликає dispatch і передає їй payload
})