import initialState from './initialState'
import {
  INPUT_ITEM,
  ADD_ITEM,
  MOVE_UP,
  MOVE_DOWN,
  DELETE_ITEM,
  EDIT_ITEM,
  CHANGE_ITEM,
  CANCEL_EDIT,
  UPDATE_ITEM
} from './actions'

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INPUT_ITEM:
      return {
        ...state,
        userInput: action.data
      }
    case ADD_ITEM:
      return {
        ...state,
        userInput: '',
        items: [
          ...state.items,
          {
            id: crypto.randomUUID(),
            content: state.userInput,
            order: state.items.length + 1
          }
        ]
      }
    case MOVE_UP:
      const moveUpItemIndex = state.items.findIndex(e => e.id === action.id)
      state.items[moveUpItemIndex].order--
      state.items[moveUpItemIndex - 1].order++

      return {
        ...state,
        items: [...state.items.sort((i1, i2) => i1.order - i2.order)]
      }
    case MOVE_DOWN:
      const moveDownItemIndex = state.items.findIndex(e => e.id === action.id)
      state.items[moveDownItemIndex].order++
      state.items[moveDownItemIndex + 1].order--

      return {
        ...state,
        items: [...state.items.sort((i1, i2) => i1.order - i2.order)]
      }
    case DELETE_ITEM:
      const deletedItemIndex = state.items.findIndex(e => e.id === action.id)
      const firstPart = state.items.slice(0, deletedItemIndex)
      const lastPart = state.items.slice(deletedItemIndex + 1)
      lastPart.forEach(item => item.order - 1)

      return {
        ...state,
        items: [
          ...firstPart,
          ...lastPart
        ]
      }
    case EDIT_ITEM:
      return {
        ...state,
        edittingItem: {
          id: action.id,
          newContent: action.currentContent
        }
      }
    case CANCEL_EDIT:
      return {
        ...state,
        edittingItem: {
          id: null,
          newContent: null
        }
      }
    case CHANGE_ITEM:
      return {
        ...state,
        edittingItem: {
          ...state.edittingItem,
          newContent: action.data
        }
      }
    case UPDATE_ITEM:
      const { id: edittingItemID, newContent } = state.edittingItem
      const itemList = state.items
      itemList.find(item => item.id === edittingItemID).content = newContent

      return {
        ...state,
        edittingItem: {
          id: null,
          newContent: null
        },
        items: itemList
      }
    default:
      return state
  }
}

export default reducer
