import { combineReducers, createStore } from 'redux'
import profilePageReduser from './profilePageReduser'
import dialogPageReduser from './dialogPageReduser'
import usersPageReduser from './usersPageReduser'

let redusers = combineReducers({
  profilePage: profilePageReduser,
  dialogPage: dialogPageReduser,
  userPage: usersPageReduser,
})

let store = createStore(redusers)

export default store
