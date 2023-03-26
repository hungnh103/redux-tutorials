import BatchCreateForm from './MainBody/BatchCreateForm'
import DataTable from './MainBody/DataTable'
import ColumnList from './MainBody/ColumnList'

const MainBody = () => {
  return (
    <div className='main-body-wrapper'>
      <BatchCreateForm />
      <ColumnList />
      <DataTable />
    </div>
  )
}

export default MainBody
