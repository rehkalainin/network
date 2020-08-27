const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

const initialState = {
  posts: [
    { id: 1, message: 'Hello', likes: 11 },
    { id: 2, message: 'How are you', likes: 12 },
    { id: 3, message: 'Welcome', likes: 13 },
  ],
  newPostText: 'Enter your text',
}

const profilePageReduser = (state = initialState, action) => {
  const stateCopy = Object.create(state)

  switch (action.type) {
    case ADD_POST:
      const post = {
        id: 4,
        message: state.newPostText,
        likes: 0,
      }
      stateCopy.posts.push(post)
      stateCopy.newPostText = ' '
      return stateCopy

    case UPDATE_POST:
      stateCopy.newPostText = action.message
      return stateCopy

    default:
      return state
  }
}
export const addPostActionCreator = () => {
  return { type: ADD_POST }
}
export const updatePostActionCreator = (text) => {
  return { type: UPDATE_POST, message: text }
}

export default profilePageReduser
