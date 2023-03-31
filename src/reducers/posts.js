import { ADD_POST } from '../actions/post'

const posts = (state = [], action) => {
  switch(action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          ...action.payload
        }
      ]
    default:
      return state
  }
}

export default posts
