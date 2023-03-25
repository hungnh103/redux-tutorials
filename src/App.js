import './App.css'
import Todo from './components/Todo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { TYPING, ADD, TOGGLE_CHECK, DELETE } from './actions'
import initialState from './data'
import { faker } from '@faker-js/faker'

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        newItem: '',
        data: [
          ...state.data,
          {
            id: faker.datatype.uuid(),
            content: action.content,
            done: false
          }
        ]
      }
    case TYPING:
      return {
        ...state,
        newItem: action.content
      }
    case TOGGLE_CHECK:
      const newData = state.data.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            done: !item.done
          }
        }

        return item
      })

      return {
        ...state,
        data: newData
      }
    case DELETE:
      const remainData = state.data.filter(item => item.id !== action.id)

      return {
        ...state,
        data: remainData
      }
    default:
      return state
  }
}

const myStore = createStore(myReducer)

function App() {
  return (
    <Provider store={myStore}>
      <Todo />
    </Provider>
  );
}

export default App;
