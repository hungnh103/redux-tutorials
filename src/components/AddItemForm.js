import { connect } from 'react-redux'
import { inputItem, addItem } from '../store/actions'

const AddItemForm = ({ text, inputItem, addItem }) => {
  const handleInputData = (e) => {
    inputItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id='user-input'
          type="text"
          value={text}
          onChange={handleInputData}
        />
        <input type="submit" value='Add' />
      </form>
    </div>
  )
}

const mapStateToProps = state => ({ text: state.userInput })
const mapDispatchToProps = {
  inputItem,
  addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm)
