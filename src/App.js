import { useDispatch, useSelector } from 'react-redux'; //імпортуємо хук useDispatch щоб робити dispatch в функціональних компонентах та хук useSelector щоб отримати значення зі стейту
import './App.css';
import { addCustomerAction, deleteCustomerAction } from './store/customerReducer'; //імпортуємо функції для створення об'єктів для редюсера відповідно до типу action з самого редюсера
import { addCashAction, getCashAction } from './store/cashReducer'; //імпортуємо функції для створення об'єктів для редюсера відповідно до типу action з самого редюсера

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash); //прокидуємо зі стейту значення cash з редюсера cashReducer за допомогою хука useSelector в змінну cash
  const customers = useSelector(state => state.customerReducer.customers); //прокидуємо зі стейту значення customers з редюсера customerReducer за допомогою хука useSelector в змінну customers


  const addCash = (cash) => {                 //функція обробник для додання в стейт через cashReducer
    dispatch(addCashAction(cash));            //dispatch за допомогою функції action.Creator і передання параметру в цю функцію
  }

  const getCash = (cash) => {                 //функція обробник для віднімання зі стейту через cashReducer
    dispatch(getCashAction(cash))             //dispatch за допомогою функції action.Creator і передання параметру в цю функцію
  }

  const addCustomer = (name) => {             //функція обробник для створення нового користувача і передання в нього імені яке отримується з функції onClick
    const customer = {                        //створення об'єкту нового користувача
      name,                                   //саме ім'я нового користувача
      id: Date.now().toString()               //обов'язково має бути якийсь id
    }
    dispatch(addCustomerAction(customer)); //dispatch за допомогою функції action.Creator і передання параметру в цю функцію
  }

  const deleteCustomer = (customer) => { //функція обробник для створення нового користувача і передання в нього імені яке отримується з функції onClick
    dispatch(deleteCustomerAction(customer.id));
  }

  return (
    <div className="App">
      <div>{cash}</div> {/*вивід змінної яку прокинули зі стейту*/}
      <div className='ButtonsForCash'>
        <button onClick={() => addCash(Number(prompt()))}>ADD_CASH</button> {/*навішуємо функцію обробник на кнопку і передаємо туди значення за допомогою prompt*/}
        <button onClick={() => getCash(Number(prompt()))}>GET_CASH</button>
        <button onClick={() => addCustomer(prompt())}>Додати користувача</button> {/*навішуємо функцію обробник на кнопку і передаємо туди значення за допомогою prompt*/}
      </div>
      {customers.length > 0 ?   //щоб відрисувати всіх користувачів за допомогою тернарного оператора перевіряємо їх кількість
        <div>
          {customers.map((customer, index) => // якщо змінна customers не пуста то мапимо її створюючи блок на який навішеємо обробник для видалення
            <div key={index} onClick={() => deleteCustomer(customer)}> {/*так як ми мапимо масив то додаємо key навісивши обробник для видалення передаємо сам об'єкт для видалення щоб відправити в редюсер*/}
              {customer.name} {/*поміщаємо ім'я з об'єкту customer за допомогою jsx*/}
            </div>
          )}
        </div>
        :
        <div>Клієнтів немає!!!!</div> //якщо змінна customers пуста то виводимо контент в блоках div
      }
    </div>
  );
}

export default App;
