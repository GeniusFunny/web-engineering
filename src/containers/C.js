import React, { useState, useEffect } from 'react'
import Header from '../components/GlobalHeader'

const C = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h4>C</h4>
      <span>{count}</span>
      <button onClick={() => setCount(count+1)}>+1</button>
    </>
  )
}
export default C