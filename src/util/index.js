function debounce(fn, wait = 300) {
  let timer
  return function() {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait);
  }
}

function throttle(fn, timeout = 300) {
  let timer, start
  return function() {
    const now = Date.now()
    const context = this
    const args = arguments
    if (start && now < start + timeout) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        start = now
        fn.apply(context, args)
      }, timeout)
    } else {
      start = now
      fn.apply(context, args)
    }
  }
}
const TIME = {
  TimezoneOffset: 8,
  unix2UTC(timestamp) {
    return new Date(timestamp + this.TimezoneOffset * 60 * 60 * 1000)
  },
  /**
   * @return {number}
   */
  UTC2Unix(time) {
    const date = new Date(time)
    return date.getTime() - this.TimezoneOffset * 60 * 60 * 1000
  },
  normalizeUTC(date) {
    return date.toISOString().split('.')[0].replace('T', ' ')
  }
}

export {
  throttle, debounce, TIME
}
