import AddCategory from './AddCategory'
import CategoryList from './CategoryList'

const CategoryContainer = () => {
  return (
    <div className='category-wrapper'>
      <h2>Category</h2>
      <AddCategory />
      <CategoryList />
    </div>
  )
}

export default CategoryContainer
