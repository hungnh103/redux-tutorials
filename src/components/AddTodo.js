import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'

const AddTodo = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button>Add todo</button>
    </form>
  )
}

export default AddTodo
