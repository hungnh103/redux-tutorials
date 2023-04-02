import { useSelector, useDispatch } from 'react-redux'
import { addNote, toggleNoteStatus } from './noteSlice'

const Notes = () => {
  const notes = useSelector(state => state.bibi)

  const dispatch = useDispatch()

  const handleAddNote = (e) => {
    e.preventDefault()

    const form = e.target
    dispatch(addNote(form.querySelector('#note-content').value))
    form.reset()
  }

  const toggleNoteDone = (e) => {
    dispatch(toggleNoteStatus(e.target.dataset.nid))
  }

  return (
    <div>
      <form onSubmit={handleAddNote}>
        <input
          id='note-content'
          type="text"
        />
        <input type="submit" value='add note' />
      </form>

      <ul>
        {notes.map(note =>
          <li key={note.id}>
            <span
              className={note.done ? 'done-item' : ''}
              data-nid={note.id}
              onClick={toggleNoteDone}
            >
              {note.content}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Notes
