import { all } from 'redux-saga/effects'
import { sagaProfilePage } from './sagaProfilePage'
import { sagaUserPage } from './sagaUserPage'
import { sagaAuth } from './sagaAuth'

export default function* rootSaga() {
  yield all([sagaProfilePage(), sagaUserPage(), sagaAuth()])
}
