import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profilePageReduser from './profilePageReduser'
import dialogPageReduser from './dialogPageReduser'
import usersPageReducer from './usersPageReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from './sagas'

const reducers = combineReducers({
  profilePage: profilePageReduser,
  dialogPage: dialogPageReduser,
  userPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
})
const saga = createSagaMiddleware()
const middlewares = applyMiddleware(logger, saga, thunk)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(middlewares))

saga.run(rootSaga) // подключение рутовой саги для слушания всех саг

window.store = store

export default store
