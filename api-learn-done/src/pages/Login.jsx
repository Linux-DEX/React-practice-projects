import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login(props) {
    // const [email, setEmail] = useState('')
    // const [pass, setPass] = useState('')

    const navigate = useNavigate();

    const [formDataLog , setFormDataLog] = useState({
        email: "",
        password: ""
    })

    const handleChangeLog = (e) => {
        setFormDataLog (prevFormDataLog => {
            return {
                ...prevFormDataLog,
                [e.target.name]: e.target.value
            }
        })
    }


    const handleSubmitLog = (e) => {
        e.preventDefault()
        if( formDataLog.email === "admin@gmail.com" && formDataLog.password === "admin"){
            navigate("/Home");
        }
        else {
            alert("incorrect!!")
            navigate("/")
        }
        
        console.log(formDataLog);
    }

   
  return (
    <div className="login-con">
        <h1>Login</h1>
    <form className='login-form' onSubmit={handleSubmitLog}>
        <label className='login-label'
        htmlFor='email'>email</label>
        <input type="email" 
        className='login-input'
        name="email" 
        placeholder='youremail@gmail.com'
        value={formDataLog.email}
        onChange={handleChangeLog}
        />
        <label className='login-label'
        htmlFor='password'>password</label>
        <input type="password" 
        className='login-input'
        name="password" 
        placeholder='*******'
        value={formDataLog.password}
        onChange={handleChangeLog}
        />
        <button className="login-btn"
       
        >submit</button>
      </form>
        <button className='login-signup-btn'
        onClick={() => props.onFormSwitch('register')} >Not a member? Signup</button>
    </div>
  )
}

