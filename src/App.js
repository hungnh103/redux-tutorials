import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
