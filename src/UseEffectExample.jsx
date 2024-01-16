import React from 'react'
import { useState, useEffect } from 'react'

function UseEffectExample() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect hook rendered");
    },[count]);

    console.log("whole component rendered");

  return (
    <div>
        {/* p<></> */}
        {console.log("this part also rerendered")}
        <p>count : {count}</p>
        <button onClick={() => setCount(count+1)} >click me</button>
    </div>
  )
}

export default UseEffectExample