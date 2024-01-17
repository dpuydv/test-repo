import React from 'react'
import { useReducer } from 'react'

const reducerFun = (state, action) => {
    switch(action.type){
        case "FORWARD":
            return {steps: state.steps+1}
        case "BACKWARD":
            return {steps: state.steps-1}
        default:
            return {...state}
    }
}

const initialState = {
    steps: 0
}



function UseReducerExample() {

    const [state, dispatch] = useReducer(reducerFun, initialState);
    const handleForward = () => {
        action = {type: "FORWARD"};
        dispatch(action)    
    };

    const handleBackward = () => {
        action = {action: "BACKWARD"};
        dispatch(action) 
    };
  return (
    <div>
        <p>Player has moved {state.steps} steps </p>
        <div style={{display:"flex", gap:40, justifyContent:"center"}} >
            <button onClick={handleForward} >Forward</button>
            <button onClick={handleBackward} >Backward</button>
        </div>
    </div>
  )
}

export default UseReducerExample