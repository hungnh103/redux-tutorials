import { useSelector } from 'react-redux'

const Todos = () => {
  const todos = useSelector(state => state.todos)

  return (
    <div>
      <ul>
        {todos.map(todo =>
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Todos
