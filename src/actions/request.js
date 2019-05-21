import { REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_FAILED } from '../constants/index'

const requestBegin = () => ({
  type: REQUEST_BEGIN
})

const requestSuccess = () => ({
  type: REQUEST_SUCCESS
})

const requestFailed = () => ({
  type: REQUEST_FAILED
})

export {
  requestBegin,
  requestFailed,
  requestSuccess
}
