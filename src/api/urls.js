const host = 'http://39.105.64.7:5000'

export default {
  login: host + '/main/login',
  register: host + '/main/register',
  test: host + '/main/index',
  logout: host + '/main/logout',
  add_course: host + '/main/add_course',
  get_course: host + '/main/get_course',
  change_course_status: host + '/main/change_course_status',
  choose_course: host + '/main.choose_course',
  add_course_type: host + '/main/add_course_type',
  my_schedule: host + '/main/add_course_type',
  get_course_type: host + '/main/get_course_type'
}
