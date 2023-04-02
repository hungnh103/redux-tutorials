import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../store/slices/productSlice'

const ProductForm = () => {
  const categories = useSelector(state => state.category)

  const dispatch = useDispatch()

  const addProductHandler = (e) => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)
    dispatch(addProduct({
      name: data.get('product_name'),
      category_id: data.get('product_category')
    }))
    form.reset()
  }

  return (
    <div>
      <form onSubmit={addProductHandler}>
        <label htmlFor="product_name">Name </label>
        <input id='product_name' name='product_name' type="text" />
        <br />

        <label htmlFor="product_category">Category </label>
        <select id='product_category' name="product_category">
          {categories.map(category =>
            <option key={category.id} value={category.id}>{category.name}</option>
          )}
        </select>
        <br />

        <input type="submit" value='Add product' />
      </form>
    </div>
  )
}

export default ProductForm
