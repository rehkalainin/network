import { profileApi } from '../api/ProfileAPI'

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'

const initialState = {
  posts: [
    { id: 1, message: 'Hello', likes: 11 },
    { id: 2, message: 'How are you', likes: 12 },
    { id: 3, message: 'Welcome', likes: 13 },
  ],
  profile: null,
  status: '',
}

const profilePageReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, { id: 4, message: action.newPostText }] }

    case SET_PROFILE:
      return { ...state, profile: action.profile }
    case SET_PROFILE_STATUS:
      return { ...state, status: action.status }

    default:
      return state
  }
}
export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText }
}
export const setProfile = (profile) => {
  return { type: SET_PROFILE, profile: profile }
}
export const setProfileStatus = (status) => {
  return { type: SET_PROFILE_STATUS, status }
}

export const getProfile = (userId) => {
  return async (dispatch) => {
    const res = await profileApi.getProfile(userId)
    dispatch(setProfile(res))
  }
}
export const getStatus = (userId) => {
  return async (dispatch) => {
    const res = await profileApi.getProfileStatus(userId)
    dispatch(setProfileStatus(res))
  }
}
export const updateStatus = (status) => {
  return async (dispatch) => {
    const res = await profileApi.updateProfileStatus(status)
    if (res.data.resultCode === 0) dispatch(setProfileStatus(status))
  }
}

export default profilePageReduser
