import { connect } from 'react-redux'

const DataTable = ({ currentColumns, staffData }) => {
  return (
    <div className='data-table-wrapper'>
      <h2>Staff List</h2>

      <div>
        <table border='1' cellSpacing='0'>
          <thead>
            <tr>
              {currentColumns.map(col =>
                <th key={col.order}>
                  {col.text}
                  {col.sortable && '⇅'}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {staffData.length > 0 ? (
              staffData.map(staff => {
                const staffInfo = []
                for(let key in staff) {
                  staffInfo.push(<td key={key}>{staff[key]}</td>)
                }

                return (
                  <tr key={staff.id}>
                    {staffInfo}
                  </tr>
                )
              })
            ) : (
              <tr>
                <td
                  colSpan={currentColumns.length}
                  style={{ textAlign: 'center' }}
                >
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapState = (state) => {
  const currentColumns = state.currentColumns
  const selectedAttrs = state.currentColumns.map(col => col.attrName)
  const staffData = state.staffList.map(staff => {
    const refinedStaff = {}
    selectedAttrs.forEach(attr => {
      refinedStaff[attr] = staff[attr]
    })
    return refinedStaff
  })

  return {
    currentColumns,
    staffData
  }
}

export default connect(mapState)(DataTable)
