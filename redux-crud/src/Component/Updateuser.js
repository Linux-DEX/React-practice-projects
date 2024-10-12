import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FetchUserObj, FuncitonUpdateUser } from '../Redux/Action'
import { useParams } from 'react-router-dom'

function Updateuser() {
    const [id,idchange ] = useState(0)
    const [name,namechange ] = useState('')
    const [email,emailchange ] = useState('')
    const [phone,phonechange ] = useState('')
    const [role,rolechange ] = useState('staff')
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const {code} = useParams();

    const userobj = useSelector((state)=> state.user.userobj)

    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj= {id, name, email, phone, role}
        dispatch(FuncitonUpdateUser(userobj, id))
        // console.log(userobj)
        navigate('/user')
    }

    useEffect(() => {
        dispatch(FetchUserObj(code))
    },[])

    useEffect(() => {
        if(userobj){
            idchange(userobj.id);
            namechange(userobj.name);
            emailchange(userobj.email);
            phonechange(userobj.phone);
            rolechange(userobj.role);
        }
    },[userobj])

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
                    <label>id</label>
                    <input value={id || ''} disabled="disabled" className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Name</label>
                    <input value={name || ''} onChange={e=>namechange(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>email</label>
                    <input value={email || ''} onChange={e=>emailchange(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>phone</label>
                    <input  value={phone || ''} onChange={e=>phonechange(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Role</label>
                    <select value={role || ''} onChange={e=>rolechange(e.target.value)}className='form-control'>
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

export default Updateuser

