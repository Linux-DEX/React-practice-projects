import { toast } from "react-toastify"
import { FAIL_REQUEST, MAKE_REQUEST, GET_USER_LIST, DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ} from "./ActionType"
import axios from "axios"
import Updateuser from "../Component/Updateuser"

export const makeRequest=() => {
    return {
        type:MAKE_REQUEST
    }
}
export const failRequest=(err) => {
    return {
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getUserList=(data) => {
    return {
        type:GET_USER_LIST,
        payload:data
    }
}

export const deleteUser = () => {
    return {
        type:DELETE_USER
    }
}

export const addUser = () => {
    return {
        type:ADD_USER
    }
}

export const updateUser = () => {
    return {
        type:UPDATE_USER
    }
}

export const getUserobj = (data) => {
    return {
        type:GET_USER_OBJ,
        payload: data
    }
}

export const FetchUserList = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user').then(res=>{
            const userList = res.data;
            dispatch(getUserList(userList))
        }).catch( err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const Removeuser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:8000/user/'+code).then(res=>{
            dispatch(deleteUser())
        }).catch( err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FuncitonAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:8000/user',data).then(res=>{
            dispatch(addUser())
            toast.success("user added successfully")
        }).catch( err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FuncitonUpdateUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:8000/user/'+code,data).then(res=>{
            dispatch(updateUser())
            toast.success("user Update successfully")
        }).catch( err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const FetchUserObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user/'+code).then(res=>{
            const userList = res.data;
            dispatch(getUserobj(userList))
        }).catch( err => {
            dispatch(failRequest(err.message))
        })
    }
}