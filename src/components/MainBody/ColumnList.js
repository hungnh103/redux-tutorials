import { connect } from 'react-redux'
import { removeColumns, addColumns } from '../../stateManagement/actions'

const ColumnList = ({
  dispatch,
  currentColumns,
  availableColumns,
  removeColumns,
  addColumns
}) => {
  const handleRemoveColumns = () => {
    const removedOrders = Array.from(document.querySelectorAll('#current-columns option:checked'))
                           .map(item => Number(item.value))

    removeColumns(removedOrders)
  }

  const handleAddColumns = () => {
    const addedOrders = Array.from(document.querySelectorAll('#available-columns option:checked'))
                             .map(item => Number(item.value))

    addColumns(addedOrders)
  }

  return (
    <div className='column-list-wrapper'>
      <h3>Column List</h3>
      <span style={{fontSize: '9pt'}}><i>Shift + Click</i> to select by range</span>
      <br />
      <span style={{fontSize: '9pt'}}><i>Ctrl + Click</i> to select multiple</span>
      <br />
      <br />

      <div className='filter-columns-section'>
        <div className='current-columns column-list'>
          <span>Current</span>
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

        <div className='available-columns column-list'>
          <span>Available</span>
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

const mapThoseDispatches = {
  removeColumns,
  addColumns
}

export default connect(mapSomeStates, mapThoseDispatches)(ColumnList)
