export const TYPING = 'TYPING'
export const ADD = 'ADD'
export const TOGGLE_CHECK = 'TOGGLE_CHECK'
export const DELETE = 'DELETE'

export const typing = (text) => {
  return {
    type: TYPING,
    content: text
  }
}

export const add = (text) => {
  return {
    type: ADD,
    content: text
  }
}

export const toggleCheck = (id) => {
  return {
    type: TOGGLE_CHECK,
    id: id
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE,
    id: id
  }
}
