import { connect } from 'react-redux'
import { toggleCheck, deleteItem } from '../actions'

const ItemList = ({ data, dispatch }) => {
  const loadFinishedItems = () => {
    return data.filter(item => !!item.done)
  }

  const handleToggleCheck = (e) => {
    dispatch(toggleCheck(e.target.id))
  }

  const handleDeleteItem = (e) => {
    dispatch(deleteItem(e.target.dataset.id))
  }

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={item.done}
              onChange={handleToggleCheck}
            />
            <label htmlFor={item.id}>{item.content}</label>
            <button
              data-id={item.id}
              style={{marginLeft: '20px'}}
              onClick={handleDeleteItem}
            >
              delete
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Finished items</h3>
        {loadFinishedItems().length > 0 ? (
          <ul>
            {loadFinishedItems().map(item =>
              <li key={item.id}>{item.content}</li>
            )}
          </ul>
        ) : (
          <div>no data</div>
        )}
      </div>
    </div>
  )
}

const mapState = (state) => ({ data: state.data })

export default connect(mapState)(ItemList)
