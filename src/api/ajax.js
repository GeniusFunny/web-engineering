function request({
  url, method, data, options
}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status)
        }
      }
    }
    setOptions.call(xhr, options)
    xhr.open(method, url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    if (method === 'PUT' || method === 'POST') {
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
  })
}

function setOptions(headers) {
  if (typeof headers === 'object') {
    Object.keys(headers).forEach(header => this.setRequestHeader(header, headers[header]))
  }
}
function querystring(obj = {}) {
  if (typeof obj === 'object' && Object.keys(obj).length) {
    return '?' + Object.keys(obj).reduce((acc, cur) => acc += `${cur}=${obj[cur]}&`, '').slice(0, -1)
  }
  return ''
}

const ajax = {
  get(url, data = {}, options = {}) {
    return request({
      method: 'GET', data, url: `${url}${querystring(data)}`, options
    })
  },
  post(url, data = {}, options = {}, queryObject = {}) {
    return request({
      method: 'POST', data, url: `${url}${querystring(queryObject)}`, options
    })
  },
  delete(url, data = {}, options = {}, queryObject = {}) {
    return request({
      method: 'DELETE', data, url: `${url}${querystring(queryObject)}`, options
    })
  },
  put(url, data = {}, options = {}, queryObject = {}) {
    return request({
      method: 'PUT', data, url: `${url}${querystring(queryObject)}`, options
    })
  },
}

export default ajax
