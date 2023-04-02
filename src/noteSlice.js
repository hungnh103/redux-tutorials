import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: crypto.randomUUID(),
    content: 'note 1',
    done: false
  },
  {
    id: crypto.randomUUID(),
    content: 'note 2',
    done: true
  }
]

const myNote = createSlice({
  name: 'ahihi',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        content: action.payload,
        done: false
      })
    },
    toggleNoteStatus: (state, action) => {
      const targetedIndex = state.findIndex(e => e.id === action.payload)
      const targetedItem = state[targetedIndex]
      state[targetedIndex] = {
        ...targetedItem,
        done: !targetedItem.done
      }
    }
  }
})

export const { addNote, toggleNoteStatus } = myNote.actions

export default myNote.reducer
