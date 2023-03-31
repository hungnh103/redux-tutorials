import { connect } from 'react-redux'
import { addCategory } from '../actions/category'

const AddCategory = ({ addCategory }) => {
  const handleAddCategory = (e) => {
    e.preventDefault()

    const form = e.target
    addCategory(form.querySelector('#category_name').value)
    form.reset()
  }

  return (
    <div>
      <form onSubmit={handleAddCategory}>
        <input
          id='category_name'
          type="text"
        />
        <input type="submit" value='add' />
      </form>
    </div>
  )
}

const mapDispatchToProps = { addCategory }

export default connect(null, mapDispatchToProps)(AddCategory)
