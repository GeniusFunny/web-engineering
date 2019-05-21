import { REGISTER_SUCCESS, REGISTER_FAILED} from '../constants'

function register(state = {
  registerStatus: ''
}, action) {
  switch (action.type) {
    case REGISTER_FAILED:
      return Object.assign({}, state, {
        registerStatus: action.registerStatus
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        registerStatus: action.registerStatus
      })
    default:
      return state
  }
}
export default register
