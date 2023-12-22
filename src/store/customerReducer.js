const customerDefaultState = {//ініціалізація початкового стейту який буде використовуватись для роботи
  customers: [

  ]
}

const ADD_CUSTOMER = "ADD_CUSTOMER"; //для відсіювання помилок action можна записати в змінні і далі використовувати їх в будь-якій частині редюсера
const DELETE_CUSTOMER = "DELETE_CUSTOMER"

export const customerReducer = (state = customerDefaultState, action) => {//безпосередньо сам редюсер який приймає початковий стейт
  switch (action.type) {                                                // і дані які приходять для обробки (тип action і дані які
    case ADD_CUSTOMER:                                                   //відповідають вказаному типу action
      return { ...state, customers: [...state.customers, action.payload]}
    case DELETE_CUSTOMER:                                                //тип action відповідно якого буде виконуватися обробка даних з action.payload
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) } // сама обробка payload, завжди повертається старе значення ...state і додається зміна старого значення
    default:        //за замовчуванням завжди має повертатися state
      return state;
  }
}

export const addCustomerAction = (payload) => ({//функція action.Creator яка одразу збирає об'єкт
  type: ADD_CUSTOMER,                            // з полями type і payload для подальшої обробки редюсером
  payload                                         //вона викликається в обробнику який викликає dispatch і передає їй payload
})

export const deleteCustomerAction = (payload) => ({//функція action.Creator яка одразу збирає об'єкт
  type: DELETE_CUSTOMER,                            // з полями type і payload для подальшої обробки редюсером
  payload                                           //вона викликається в обробнику який викликає dispatch і передає їй payload
})