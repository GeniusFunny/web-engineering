import {REGISTER_FAILED, REGISTER_SUCCESS} from '../constants/index'
import { requestBegin, requestSuccess } from './request'
import { registerAPI } from '../api'


const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
  registerStatus: 'success'
})

const registerFailed = () => ({
  type: REGISTER_FAILED,
  registerStatus: 'failed'
})


function register(data) {
  return dispatch => {
    dispatch(requestBegin())
    registerAPI(data).then(res => {
      dispatch(requestSuccess())
      dispatch(registerSuccess())
    }).catch(err => {
      alert('注册失败')
      dispatch(registerFailed())
    })
  }
}


export {
  register
}
