import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: crypto.randomUUID(),
      text: 'item 1'
    }
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: crypto.randomUUID(),
        text: action.payload
      }

      state.push(todo)
    }
  }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
