import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Create() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8017/create',{name,email,phone})
        .then(res => {console.log(res.data);
            navigate('/');})
        .catch(err => console.log(err))
    }
  return (
    <div>
      <h1>ADD DATA</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder='Enter Your Name' onChange={e => setName(e.target.value)} />
        <br/>
        <label>E-mail:</label>
        <input type="email" placeholder='Enter Your Email' onChange={e => setEmail(e.target.value)} />
        <br/>
        <label>Phone:</label>
        <input type="tel" placeholder='Enter Your Phone Number' onChange={e => setPhone(e.target.value)} />
        <br/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Create
