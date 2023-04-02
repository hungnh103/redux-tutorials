import { configureStore } from '@reduxjs/toolkit'
import firstReducer from './counterSlice'

const store = configureStore({
  reducer: {
    tenGiCungDuoc: firstReducer
  }
})

export default store
