export const INPUT_NUMBER = 'INPUT_NUMBER'
export const BATCH_GENERATE = 'BATCH_GENERATE'
export const ADD = 'ADD'
export const REMOVE_COLUMNS = 'REMOVE_COLUMNS'
export const ADD_COLUMNS = 'ADD_COLUMNS'

export const inputNumber = (number) => ({
  type: INPUT_NUMBER,
  wantedRecordNumber: number
})

export const batchGenerate = () => ({ type: 'BATCH_GENERATE' })

export const addStaff = (staff) => ({
  type: ADD,
  staffData: staff
})


export const removeColumns = (orders) => ({
  type: REMOVE_COLUMNS,
  removedOrders: orders
})

export const addColumns = (orders) => ({
  type: ADD_COLUMNS,
  addedOrders: orders
})
