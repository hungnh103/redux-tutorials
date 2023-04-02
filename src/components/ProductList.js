import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/product'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    const { products, loading, error } = this.props

    if (error) {
      return <div>Error! {error}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <>
        <h2>Product List</h2>
        <ul>
          {products.map(product =>
            <li key={product.id}>{product.name}</li>
          )}
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product.items,
  loading: state.product.loading,
  error: state.product.error
})

export default connect(mapStateToProps)(ProductList)
