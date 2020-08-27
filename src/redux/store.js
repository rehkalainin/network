import profilePageReduser from './profilePageReduser'
import dialogPageReduser from './dialogPageReduser'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello', likes: 11 },
        { id: 2, message: 'How are you', likes: 12 },
        { id: 3, message: 'Welcome', likes: 13 },
      ],
      newPostText: 'Enter your text',
    },
    dialogPage: {
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
    },
  },
  getState() {
    return this._state
  },
  rerender() {
    console.log('State changed')
  },
  subscribe(observer) {
    this.rerender = observer
  },

  dispatch(action) {
    this._state.profilePage = profilePageReduser(this._state.profilePage, action)
    this._state.dialogPage = dialogPageReduser(this._state.dialogPage, action)

    this.rerender(this._state)
  },
}

export default store
