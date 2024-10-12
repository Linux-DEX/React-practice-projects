import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {
    // NOTE: this will navigate the user after the 1 sec. 
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    },[])

    return (
        <div>NotFound</div>
        // NOTE: This will navigate to the home if the url is not valid.
        // <Navigate to='/' />

    )
}

export default NotFound