import { ADD_CATEGORY } from '../actions/category'

const initialCategories = [
  {
    id: crypto.randomUUID(),
    content: 'category 1'
  },
  {
    id: crypto.randomUUID(),
    content: 'category 2'
  },
  {
    id: crypto.randomUUID(),
    content: 'category 3'
  }
]

const categories = (state = initialCategories, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          content: action.payload
        }
      ]
    default:
      return state
  }
}

export default categories
