import { useSelector, useDispatch } from 'react-redux'
import { addition, subtraction } from './counterSlice'

function App() {
  const number = useSelector(state => state.tenGiCungDuoc.value)

  const loadDispatch = useDispatch()

  const handleIncrement = () => {
    loadDispatch(addition())
  }

  const handleDecrement = () => {
    loadDispatch(subtraction())
  }

  return (
    <div className="App">
      <button onClick={handleIncrement}>+</button>
      <span>{number}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
