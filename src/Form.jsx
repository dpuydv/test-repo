import React from 'react'
import { useState } from 'react'
import './Form.css'
const quant = ["0-100", "100-500", "500-1000"]

// const formHandler = (e) => {
//     e.preventDefault()
//     console.log()
// }

function Form() {
    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState("");
    // const [quantity, setQuantity] = useState(0);

    const [input, inputHandle] = useState({title:"", description:"", quantity:"", price:""});

    // console.log(title)

    const formHandler = (e) => {
        e.preventDefault();
        // console.log(input.title);
        // console.log(input.price);
        // console.log(input.description);
        // console.log(input.quantity);
        console.log(input)
    }

    const handleChange = (e) => {
        // console.log(e);
        // console.log(e.target.name);
        // console.log(e.target.value);
        inputHandle((prev) => ({...prev, [e.target.name]:e.target.value}));
        console.log(input.title, input.description, input.quantity, input.price);
    }

  return (
    <div className='inputs' >
        <form onSubmit={formHandler}>
        <input onChange={handleChange} value={input.title} type='text' name='title' placeholder='product name' />
        <input onChange={handleChange} value={input.price} type='number' name='price' placeholder='price' />
        <input onChange={handleChange} value={input.description} type='text' name='description' placeholder='description' />
        <select onChange={handleChange} value={input.quantity} name='quantity' >
            {quant.map((item) => (
                <option key={item} value={item} >{item}</option>
            ))}
        </select>
        <button>submit</button>
        </form>
    </div>
  )
}

export default Form

// made changes here  as well