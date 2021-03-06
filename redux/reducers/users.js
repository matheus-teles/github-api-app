import { REQUEST_USERS, RECEIVE_USERS, INVALIDATE_USERS } from '../actionTypes'

const INITIAL_STATE = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.users
      }
    case INVALIDATE_USERS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      }
    default:
      return state
  }
}
