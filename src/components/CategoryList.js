import { connect } from 'react-redux'

const CategoryList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(category =>
          <li key={category.id}>
            {category.content}
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({ data: state.categories })

export default connect(mapStateToProps)(CategoryList)
