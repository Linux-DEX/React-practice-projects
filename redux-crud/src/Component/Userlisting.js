import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { FetchUserList, Removeuser } from '../Redux/Action';
import { Link } from 'react-router-dom';
import { Toast } from 'bootstrap';

const Userlisting = (props) =>  {
    useEffect( () => {
        props.loaduser();
    },[])

    const handledelete = (code) => {
        if(window.confirm("do you want to remove?")){
             props.removeuser(code)
             props.loaduser();
             Toast.success("User removed successfully.")
        }
    }

  return (
    props.user.loading? <div><h2>Loading...</h2></div>:
    props.user.errmessage? <div><h2>{props.user.errmessage}</h2></div>:

    <div>
        <div className="card">
            <Link to={'/user/add'} className='btn btn-success'>Add User [+] </Link>
        </div>
        <div className="card-body">
            <table className='table table-bordered'>
                <thead className="bg-dark text-white">
                    <tr>
                        <td>Code</td>
                        <td>name</td>
                        <td>email</td>
                        <td>Phone</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.user.userlist && props.user.userlist.map(item => {
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.role}</td>
                                <td>
                                    <Link to={'/user/edit/' + item.id} className='btn btn-primary'>Edit</Link>
                                    <button onClick={() => {handledelete(item.id)}} className='btn btn-primary'>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loaduser:() => dispatch(FetchUserList()),
        removeuser:(code) => dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Userlisting);