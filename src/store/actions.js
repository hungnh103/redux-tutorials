export const INPUT_ITEM = 'INPUT_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const MOVE_UP = 'MOVE_UP'
export const MOVE_DOWN= 'MOVE_DOWN'
export const DELETE_ITEM = 'DELETE_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'
export const CANCEL_EDIT = 'CANCEL_EDIT'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export const inputItem = (data) => ({
  type: INPUT_ITEM,
  data: data
})

export const addItem = () => ({ type: ADD_ITEM })

export const moveItemUp = (id) => ({
  type: MOVE_UP,
  id: id
})

export const moveDownItem = (id) => ({
  type: MOVE_DOWN,
  id: id
})

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id: id
})

export const editItem = (id, content) => ({
  type: EDIT_ITEM,
  id: id,
  currentContent: content
})

export const changeContent = (value) => ({
  type: CHANGE_ITEM,
  data: value
})

export const cancelEdit = () => ({ type: CANCEL_EDIT })

export const updateItem = () => ({ type: UPDATE_ITEM })
