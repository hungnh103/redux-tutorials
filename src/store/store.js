import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice'
import productReducer from './slices/productSlice'

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer
  }
})

export default store
