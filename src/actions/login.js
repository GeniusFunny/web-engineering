import { LOGIN_SUCCESS, LOGIN_FAILED, REQUEST_BEGIN, LOGIN_OUT } from '../constants/index'
import { requestBegin, requestSuccess, requestFailed } from './request'
import { loginAPI, logoutAPI } from '../api'

const loginBegin = () => ({
  type: REQUEST_BEGIN
})

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const loginFailed = () => ({
  type: LOGIN_FAILED
})

const logoutSuccess = () => ({
  type: LOGIN_OUT
})

function login(data) {
  return dispatch => {
    dispatch(loginBegin())
    dispatch(requestBegin())
    loginAPI(data).then(res => {
      console.log(res)
      dispatch(loginSuccess())
    }).catch(err => {
      console.log(err)
      dispatch(loginFailed())
    })
  }
}

function logout() {
  return dispatch => {
    dispatch(requestBegin())
    logoutAPI().then(res => {
      console.log(res)
      dispatch(requestSuccess())
      dispatch(logoutSuccess())
    }).catch(err => {
      console.log(err)
    })
  }
}

export {
  login,
  logout
}
