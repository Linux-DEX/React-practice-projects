import React from 'react'

const Greet = (props) => {
    return (
        <div>
            {props.name && <h2>This will render if condition is true.</h2>}
            <h1>Greeting To {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Greet