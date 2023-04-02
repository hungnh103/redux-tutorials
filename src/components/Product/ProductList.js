import { useSelector } from 'react-redux'

const ProductList = () => {
  const products = useSelector(state => state.product)
  const categories = useSelector(state => state.category)

  return (
    <div>
      <ul>
        {products.map(product =>
          <li key={product.id}>
            <p>
              <span className='title'>Name: </span>
              {product.name}
            </p>
            <p>
              <span className='title'>Category: </span>
              {categories.find(c => c.id === product.category_id).name}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ProductList
