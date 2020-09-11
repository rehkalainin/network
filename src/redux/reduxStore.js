import { applyMiddleware, combineReducers, createStore } from 'redux'
import profilePageReduser from './profilePageReduser'
import dialogPageReduser from './dialogPageReduser'
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profilePageReduser,
  dialogPage: dialogPageReduser,
  userPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
