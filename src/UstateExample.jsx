import React from 'react'
import { useState } from 'react'

function UstateExample() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <p>Count : {count} </p>
        <button onClick={() => setCount(count+1)}>click me</button>
    </div>
  )
}

export default UstateExample