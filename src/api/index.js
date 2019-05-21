import ajax from './ajax'
import urls from './urls'

const loginAPI = data => ajax.post(urls.login, data)

const logoutAPI = () => ajax.get(urls.logout)

const registerAPI = data => ajax.post(urls.register, data, {}, {})

const getCourseTypeAPI = data => ajax.get(urls.get_course_type, data, {})

const myScheduleAPI = () => ajax.get(urls.my_schedule, {}, {})

const addCourseTypeAPI = () => ajax.post(urls.add_course_type, data, {}, {})

const chooseCourseAPI = data => ajax.get(urls.choose_course, data, {})

const changeCourseStatusAPI = data => ajax.post(urls.change_course_status, data, {}, {})

const getCourseAPI = data => ajax.get(urls.get_course, data, {})

const addCourseAPI = data => ajax.post(urls.add_course, data, {}, {})

export {
  loginAPI,
  logoutAPI,
  registerAPI,
  getCourseAPI,
  getCourseTypeAPI,
  changeCourseStatusAPI,
  addCourseAPI,
  addCourseTypeAPI,
  chooseCourseAPI,
  myScheduleAPI
}
