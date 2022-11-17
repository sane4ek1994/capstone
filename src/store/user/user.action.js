import { USER_ACTION_TYPES } from './users.types'
import { createAction } from '../../utils'

export const setCurrentUser = user => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
export const googleSingInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SING_IN_START)
export const emailSingInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SING_IN_START, { email, password })
export const singInSuccess = user => createAction(USER_ACTION_TYPES.SING_IN_SUCCESS, user)
export const singInFailed = error => createAction(USER_ACTION_TYPES.SING_IN_FAILED, error)
