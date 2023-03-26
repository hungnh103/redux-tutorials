import { connect } from 'react-redux'
import { inputNumber, batchGenerate } from '../../stateManagement/actions'

const BatchCreateForm = ({ wantedRecordNumber, dispatch }) => {
  const handleInputNumber = (e) => {
    dispatch(inputNumber(Number(e.target.value)))
  }

  const handleBatchGenerate = (e) => {
    e.preventDefault()
    dispatch(batchGenerate())
  }

  return (
    <div>
      <h3>Batch create data</h3>
      <form onSubmit={handleBatchGenerate}>
        Number of records:
        <input
          type="number"
          min='1'
          max='10'
          value={wantedRecordNumber}
          onChange={handleInputNumber}
        />
        <input type="submit" value='Generate' />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({ wantedRecordNumber: state.wantedRecordNumber })

export default connect(mapStateToProps)(BatchCreateForm)
