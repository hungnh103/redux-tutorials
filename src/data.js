// dynamic data version
/*import { faker } from '@faker-js/faker'

const numberOfItems = 5
const itemList = []

for(let i = 0; i < numberOfItems; i++) {
  const item = {
    id: faker.datatype.uuid(),
    content: faker.animal.rabbit(),
    done: Math.random() > 0.5
  }

  itemList.push(item)
}

const initialState = {
  newItem: '',
  data: itemList
}*/


// static data version
const initialState = {
  "newItem": "",
  "data": [
    {
      "id": "5617099d-de53-4ddb-adc2-7b8257c34aa6",
      "content": "Himalayan",
      "done": true
    },
    {
      "id": "694279e9-b9b0-4940-a9d5-cc3c135e1224",
      "content": "Checkered Giant",
      "done": false
    },
    {
      "id": "5835caf1-e077-4536-98f7-4c3bfad3a53d",
      "content": "Harlequin",
      "done": true
    },
    {
      "id": "f411b1ca-9d38-456a-9055-b483c18d67ba",
      "content": "Blanc de Hotot",
      "done": true
    },
    {
      "id": "9e826f7c-bef7-4942-bc8a-fa7fc4f0b858",
      "content": "Argente Brun",
      "done": true
    }
  ]
}

export default initialState
