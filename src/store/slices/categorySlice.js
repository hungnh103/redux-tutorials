import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: crypto.randomUUID(),
    name: 'category 1'
  },
  {
    id: crypto.randomUUID(),
    name: 'category 2'
  }
]

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          name: action.payload
        }
      ]
    }
  }
})

export const { addCategory } = categorySlice.actions

export default categorySlice.reducer
