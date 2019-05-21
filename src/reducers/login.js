import {LOGIN_FAILED, LOGIN_OUT, LOGIN_SUCCESS} from '../constants/index'
export default function login(state = {
  login: false
}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        login: true
      }
    )
    case LOGIN_FAILED:case LOGIN_OUT:
      return Object.assign({}, state, {
        login: false
      })
    default:
      return state
  }
}
