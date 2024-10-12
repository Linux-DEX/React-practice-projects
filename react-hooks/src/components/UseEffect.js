import React, { useState, useEffect} from "react";

// useState is first hooks, and useEffect is the second hook

export default function UseEffect() {

    const [resourceType, setResourceType] = useState('posts')
    
    console.log('render')

    useEffect(() => {
        console.log('resource type changed')
    }, [resourceType])

    // useEffect() function is run every time when ever the state is changed
    // useEffect(function, values)  when ever the values is change the function will be run

    return(
        <div>
           <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
           </div>
           <h1>{resourceType}</h1>
        </div>
    )
}