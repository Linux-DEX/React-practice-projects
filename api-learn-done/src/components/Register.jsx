import React, { useState } from 'react'

export default function Register(props) {
    // const [email, setEmail] = useState('')
    // const [pass, setPass] = useState('')
    // const [name, setName] = useState('')

    const [formData , setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData (prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }

  return (
    <div className="login-con">
        <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <label className='login-label'
        htmlFor='name'>name</label>
        <input type="text" 
        className='login-input'
        name="name" 
        placeholder='full name'
        value={formData.name}
        onChange={handleChange}
        />
        <label className='login-label'
        htmlFor='email'>email</label>
        <input type="email" 
        className='login-input'
        name="email" 
        placeholder='youremail@gmail.com'
        value={formData.email}
        onChange={handleChange}
        />
        <label className='login-label'
        htmlFor='password'>password</label>
        <input type="password" 
        className='login-input'
        name="password" 
        placeholder='*******'
        value={formData.password}
        onChange={handleChange}
        />
        <button className="login-btn">submit</button>
      </form>
        <button className='login-signup-btn'
        onClick={() => props.onFormSwitch('login')}> Go to Login!</button>
    </div>
  )
}
