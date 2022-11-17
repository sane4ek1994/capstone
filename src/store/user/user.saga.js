import { takeLatest, all, call, put } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './users.types'

import { singInSuccess, singInFailed } from './user.action'

import { getCurrentUser, createUserDocumentFromAuth } from '../../utils'

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userShapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
    yield put(singInSuccess({ id: userShapshot.id, ...userShapshot.data() }))
  } catch (error) {
    yield put(singInFailed(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(singInFailed(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSaga() {
  yield all([call(onCheckUserSession)])
}
