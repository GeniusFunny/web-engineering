import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ScrollTop(props) {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0)
    };
  }, [props.location.pathname])
  return props.children
}
export default withRouter(ScrollTop)