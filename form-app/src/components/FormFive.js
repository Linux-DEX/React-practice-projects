import React, { useState } from 'react'

const FormFive = () => {
    const [text, setText] = useState('');
    
    const onChangeHandler = (event) => {
        console.log(event.target.name, event.target.value)
        setText(event.target.value)
    }

    return (
        // <div className="App">
        //     <h1>{text}</h1>
        //     <input type="text" onChange={(e) => {setText(e.target.value)}} value={text} />
        // </div>

        // NOTE: using function 
        <div className="App">
            <h1>{text}</h1>
            <input type="text" onChange={onChangeHandler} value={text} />
        </div>
    )
}

export default FormFive