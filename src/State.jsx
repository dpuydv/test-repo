import React from 'react'
import { useState } from 'react'

function State() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>count : {count} </p>
        <button onClick={() => setCount(count+1)} > click me</button>
    </div>
  )
}

export default State

// made changes here as well but i w'll not push this branch to prod