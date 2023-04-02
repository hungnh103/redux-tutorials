import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './noteSlice'

const store = configureStore({
  reducer: {
    bibi: noteReducer
  }
})

export default store
