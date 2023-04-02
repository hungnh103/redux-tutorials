import { useDispatch } from 'react-redux'
import { addCategory } from '../../store/slices/categorySlice'

const CategoryForm = () => {
  const dispatch = useDispatch()

  const addCategoryHandler = (e) => {
    e.preventDefault()

    const form = e.target
    dispatch(addCategory(form.querySelector("input[type='text']").value))
    form.reset()
  }

  return (
    <div>
      <form onSubmit={addCategoryHandler}>
        <input type="text" />
        <input type="submit" value='Add category' />
      </form>
    </div>
  )
}

export default CategoryForm
