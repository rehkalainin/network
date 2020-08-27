const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

const initialState = {
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Kostya' },
    { id: 3, name: 'Andrey' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Sveta' },
    { id: 6, name: 'Ivan' },
  ],
  messages: [
    { message: 'Hello' },
    { message: 'How are you' },
    { message: 'Good luck' },
    { message: 'See you soon' },
  ],
  newMessage: 'Enter text',
}

const dialogPageReduser = (state = initialState, action) => {
  const stateCopy = Object.create(state)

  switch (action.type) {
    case ADD_MESSAGE:
      const message = {
        message: state.newMessage,
      }
      stateCopy.messages.push(message)
      return stateCopy

    case UPDATE_MESSAGE:
      stateCopy.newMessage = action.message
      return stateCopy

    default:
      return state
  }
}
export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE }
}
export const updateMessageActionCreator = (text) => {
  return { type: UPDATE_MESSAGE, message: text }
}
export default dialogPageReduser
