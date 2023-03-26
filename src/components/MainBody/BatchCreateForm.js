import { connect } from 'react-redux'
import { inputNumber, batchGenerate } from '../../stateManagement/actions'

const BatchCreateForm = ({
  dispatch,
  wantedRecordNumber,
  inputNumber,
  batchGenerate
}) => {
  const handleInputNumber = (e) => {
    inputNumber(Number(e.target.value))
  }

  const handleBatchGenerate = (e) => {
    e.preventDefault()
    batchGenerate()
  }

  return (
    <div>
      <h3>Generate random data</h3>
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
const mapDispatches = {
  inputNumber,
  batchGenerate
}

export default connect(mapStateToProps, mapDispatches)(BatchCreateForm)
