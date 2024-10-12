import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FuncitonAddUser } from '../Redux/Action'
import { useNavigation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Adduser() {
    const [name,namechange ] = useState('')
    const [email,emailchange ] = useState('')
    const [phone,phonechange ] = useState('')
    const [role,rolechange ] = useState('staff')
    const dispatch= useDispatch();
    const navigate = useNavigation();

    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj= {name,email,phone,role}
        dispatch(FuncitonAddUser(userobj))
        // console.log(userobj)
        navigate('/user')
    }

  return (
    <form onSubmit={handlesubmit}>
        <div className="card">
        <div className="card-header" style={{textAlign:'left'}}>
        <h2>add user</h2>
    </div>
    <div className="card-body" style={{textAlign:'left'}}>
        <div className="row">
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Name</label>
                    <input value={name} onChange={e=>namechange(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>email</label>
                    <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>phone</label>
                    <input  value={phone} onChange={e=>phonechange(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Role</label>
                    <select value={role} onChange={e=>rolechange(e.target.value)}className='form-control'>
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div className="card-footer" style={{textAlign:'left'}}>
        <button className='btn btn-primary' type='submit'>Submit</button>
        <Link to={'/user'} className='btn btn-danger' >Back</Link>
    </div> 
    </div>
    </form>
    
   
  )
}
