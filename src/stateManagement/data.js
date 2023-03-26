const initialData = {
  currentColumns: [
    {
      order: 1,
      text: '#ID',
      attrName: 'id',
      required: true,
      sortable: true
    },
    {
      order: 2,
      text: 'Fullname',
      attrName: 'fullName',
      required: true,
      sortable: true
    },
    {
      order: 3,
      text: 'Gender',
      attrName: 'gender'
    },
    {
      order: 4,
      text: 'Job',
      attrName: 'job'
    },
    {
      order: 5,
      text: 'Address',
      attrName: 'address'
    },
    {
      order: 7,
      text: 'Vehicle',
      attrName: 'vehicle'
    }
  ],
  availableColumns: [
    {
      order: 6,
      text: 'Phone',
      attrName: 'phone'
    }
  ],
  wantedRecordNumber: 5,
  staffList: []
}

export default initialData

// sample data
/*staffList: [
  {
    id: 2,
    fullName: 'Dr. Tracey Purdy',
    gender: 'female',
    job: 'Chief Quality Producer',
    address: '4986 Smitham Branch',
    phone: '(783) 341-6122 x588',
    vehicle: 'Volvo Model T'
  },
  {
    id: 3,
    fullName: 'Benjamin Cummerata',
    gender: 'male',
    job: 'Forward Data Executive',
    address: '05769 Rylan Views',
    phone: '464-480-8744 x573',
    vehicle: 'Ferrari Model'
  }
]*/
