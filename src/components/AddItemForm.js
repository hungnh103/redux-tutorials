import { connect } from 'react-redux'
import { typing, add } from '../actions'

const AddItemForm = ({ inputValue, dispatch }) => {
  const handleChangeInput = (e) => {
    dispatch(typing(e.target.value))
  }

  const handleAddItem = (e) => {
    e.preventDefault()
    dispatch(add(inputValue))
  }

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder='write new item..'
          value={inputValue}
          onChange={handleChangeInput}
        />
        <input type="submit" value='add' />
      </form>
    </div>
  )
}

const mapStateHere = (appState) => ({ inputValue: appState.newItem })

export default connect(mapStateHere)(AddItemForm)
