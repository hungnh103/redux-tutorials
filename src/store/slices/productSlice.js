import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          ...action.payload
        }
      ]
    }
  }
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer
