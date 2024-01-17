import React from 'react'
import { useRef, useEffect } from 'react'
function UserRefExample() {

    const headRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        headRef.current.innerText ="OK OK"
        inputRef.current.nodeValue="Deepu Yadav"
    }, []);
    
    console.log(headRef)
    console.log(inputRef)
  return (
    <div>
        <h1 ref={headRef} >Hii</h1>
        <input type='text' ref={inputRef} />
    </div>
  )
}

export default UserRefExample