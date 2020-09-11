const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

const dialogPageReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { message: action.newMessageBody }],
      }

    default:
      return state
  }
}
export const addMessage = (newMessageBody) => {
  return { type: ADD_MESSAGE, newMessageBody }
}
export default dialogPageReduser
