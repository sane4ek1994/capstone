import { USER_ACTION_TYPES } from './users.types'
import { createAction } from '../../utils'

export const setCurrentUser = user => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
