import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'myCounter',
  initialState: {
    value: 2
  },
  reducers: {
    addition: (state) => {
      state.value += 1
    },
    subtraction: (state) => {
      state.value -= 1
    }
  }
})

export const { addition, subtraction } = counterSlice.actions

export default counterSlice.reducer
