import { useSelector } from 'react-redux'

const CategoryList = () => {
  const categories = useSelector(state => state.category)

  return (
    <div>
      <ul>
        {categories.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}

export default CategoryList

