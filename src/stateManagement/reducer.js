import { createStore } from 'redux'
import {
  INPUT_NUMBER,
  BATCH_GENERATE,
  ADD,
  REMOVE_COLUMNS,
  ADD_COLUMNS
} from './actions'
import { faker } from '@faker-js/faker'
import initialData from './data'

const myReducer = (state = initialData, action) => {
  const latestStaff = state.staffList.slice(-1)[0]
  const lastStaffID = latestStaff ? latestStaff.id : 0

  switch (action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        wantedRecordNumber: action.wantedRecordNumber
      }
    case BATCH_GENERATE:
      const newStaffs = []

      for (let i = 0; i < state.wantedRecordNumber; i++) {
        const newMember = {
          id: lastStaffID + i + 1,
          fullName: faker.name.fullName(),
          gender: faker.name.sex(),
          job: faker.name.jobTitle(),
          address: faker.address.streetAddress(),
          phone: faker.phone.phoneNumber(),
          vehicle: faker.vehicle.vehicle()
        }

        newStaffs.push(newMember)
      }

      return {
        ...state,
        wantedRecordNumber: 5,
        staffList: state.staffList.concat(newStaffs)
      }
    case ADD:
      return {
        ...state,
        staffList: [
          ...state.staffList,
          {
            id: lastStaffID + 1,
            ...action.staffData
          }
        ]
      }
    case REMOVE_COLUMNS:
      const persistedCols = []
      const removedCols = []
      state.currentColumns.forEach(col => {
        if (action.removedOrders.includes(col.order)) {
          removedCols.push(col)
        } else {
          persistedCols.push(col)
        }
      })

      return {
        ...state,
        currentColumns: persistedCols,
        availableColumns: state.availableColumns
                               .concat(removedCols)
                               .sort((col1, col2) => col1.order - col2.order)
      }
    case ADD_COLUMNS:
      const stillAvailCols = []
      const addedCols = []
      state.availableColumns.forEach(col => {
        if (action.addedOrders.includes(col.order)) {
          addedCols.push(col)
        } else {
          stillAvailCols.push(col)
        }
      })

      return {
        ...state,
        availableColumns: stillAvailCols,
        currentColumns: state.currentColumns
                             .concat(addedCols)
                             .sort((col1, col2) => col1.order - col2.order)
      }
    default:
      return state
  }
}

const myStore = createStore(myReducer)

export default myStore
