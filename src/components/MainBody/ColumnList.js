import { connect } from 'react-redux'
import { removeColumns, addColumns } from '../../stateManagement/actions'

const ColumnList = ({ dispatch, currentColumns, availableColumns }) => {
  const handleRemoveColumns = () => {
    const removedOrders = Array.from(document.querySelectorAll('#current-columns option:checked'))
                           .map(item => Number(item.value))

    dispatch(removeColumns(removedOrders))
  }

  const handleAddColumns = () => {
    const addedOrders = Array.from(document.querySelectorAll('#available-columns option:checked'))
                             .map(item => Number(item.value))

    dispatch(addColumns(addedOrders))
  }

  return (
    <div className='column-list-wrapper'>
      <h3>Column List</h3>

      <div className='filter-columns-section'>
        <div className='current-columns'>
          <select id='current-columns' multiple>
            {currentColumns.map(col =>
              <option
                key={col.order}
                value={col.order}
                disabled={col.required}
              >
                {col.text}
              </option>
            )}
          </select>
        </div>

        <div className='move-buttons'>
          <button onClick={handleAddColumns}>⇐</button>
          <br />
          <button onClick={handleRemoveColumns}>⇒</button>
        </div>

        <div className='available-columns'>
          <select id='available-columns' multiple size='10'>
            {availableColumns.map(col =>
              <option key={col.order} value={col.order}>{col.text}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  )
}

const mapSomeStates = state => ({
  currentColumns: state.currentColumns,
  availableColumns: state.availableColumns
})

export default connect(mapSomeStates)(ColumnList)
