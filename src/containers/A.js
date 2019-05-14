import React, { useState, useEffect } from 'react'
import Header from '../components/GlobalHeader'

const A = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h4>A</h4>
      <span>{count}</span>
      <button onClick={() => setCount(count+1)}>+1</button>
    </>
  )
}
export default A