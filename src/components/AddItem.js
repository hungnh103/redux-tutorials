import { connect } from 'react-redux'
import { addStaff } from '../stateManagement/actions'

const AddItem = ({ dispatch, addStaff }) => {
  const handleCreateStaff = (e) => {
    e.preventDefault()

    const formObject = e.target
    const staff = {
      fullName: formObject.querySelector('#fullname').value,
      gender: formObject.querySelector('#gender').value,
      job: formObject.querySelector('#job').value,
      address: formObject.querySelector('#address').value,
      phone: formObject.querySelector('#phone').value,
      vehicle: formObject.querySelector('#vehicle').value
    }
    addStaff(staff)
    formObject.reset()
  }

  return (
    <div className='add-item-wrapper'>
      <h3>Add single staff</h3>

      <div>
        <form onSubmit={handleCreateStaff}>
          <div>
            <label htmlFor="fullname">Fullname</label>
            <br />
            <input id='fullname' name='fullname' type="text" />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <br />
            <select name="gender" id="gender">
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>
          <div>
            <label htmlFor="job">Job Title</label>
            <br />
            <input name='job' id='job' type="text" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <br />
            <input name='address' id='address' type="text" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <br />
            <input name='phone' id='phone' type="text" />
          </div>
          <div>
            <label htmlFor="vehicle">Vehicle</label>
            <br />
            <input name='vehicle' id='vehicle' type="text" />
          </div>

          <div>
            <input type="submit" value='Add' />
          </div>
        </form>
      </div>
    </div>
  )
}

const mapDispatch = {addStaff}

export default connect(null, mapDispatch)(AddItem)
