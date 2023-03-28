import { connect } from 'react-redux'
import {
  moveItemUp,
  moveDownItem,
  deleteItem,
  editItem,
  changeContent,
  cancelEdit,
  updateItem
} from '../store/actions'

const Item = ({
  dispatch,
  items,
  editItemID,
  editItemContent,
  moveItemUp,
  moveDownItem,
  deleteItem,
  editItem,
  changeContent,
  cancelEdit,
  updateItem
}) => {
  const numberOfItems = items.length

  const handleMoveUp = (e) => {
    moveItemUp(e.target.dataset.iid)
  }

  const handleMoveDown = (e) => {
    moveDownItem(e.target.dataset.iid)
  }

  const handleDelete = (e) => {
    deleteItem(e.target.dataset.iid)
  }

  const handleEditItem = (e) => {
    editItem(
      e.target.dataset.iid,
      e.target.dataset.icontent
    )
  }

  const handleChangeContent = (e) => {
    changeContent(e.target.value)
  }

  const handleCancelEdit = (e) => {
    e.preventDefault()
    cancelEdit()
  }

  const handleUpdateItem = (e) => {
    e.preventDefault()
    updateItem()
  }

  return (
    <div>
      <ul>
        {items.map((item, index) =>
          <li key={item.id}>
            {editItemID === item.id ? (
              <form>
                <input
                  type="text"
                  value={editItemContent}
                  onChange={handleChangeContent}
                />

                <button
                  className='control-btn'
                  onClick={handleUpdateItem}
                >
                  Update
                </button>

                <button
                  onClick={handleCancelEdit}
                  className='control-btn'
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <span
                  style={{
                    marginRight: '20px',
                    display: 'inline-block',
                    width: '100px'
                  }}
                >
                  {item.content}
                </span>

                {numberOfItems > 1 && index > 0 &&
                  <button
                    className={`control-btn ${index === numberOfItems - 1 ? 'last-up-btn': ''}`}
                    data-iid={item.id}
                    onClick={handleMoveUp}
                  >
                    ↑ up
                  </button>}

                {numberOfItems > 1 && index < numberOfItems - 1 &&
                  <button
                    className={`control-btn ${index === 0 ? 'first-down-btn' : ''}`}
                    data-iid={item.id}
                    onClick={handleMoveDown}
                  >
                    ↓ down
                  </button>
                }

                <button
                  className='control-btn'
                  data-iid={item.id}
                  data-icontent={item.content}
                  onClick={handleEditItem}
                >
                  edit
                </button>

                <button
                  className='control-btn'
                  data-iid={item.id}
                  onClick={handleDelete}
                >
                  delete
                </button>
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.items,
  editItemID: state.edittingItem.id,
  editItemContent: state.edittingItem.newContent
})

const mapDispatchToProps = {
  moveItemUp,
  moveDownItem,
  deleteItem,
  editItem,
  changeContent,
  cancelEdit,
  updateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
