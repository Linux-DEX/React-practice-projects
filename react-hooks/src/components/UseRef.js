import React, {useState, useEffect, useRef} from "react";

// export default function UseRef () {

//     const [name, setName] = useState('')
//     const renderCount = useRef(1)

//     useEffect(() => {
//         renderCount.current = renderCount.current + 1
//     })

//     return (
//         <div>
//             <input className="input-value" value={name} onChange={ e => setName(e.target.value)} />
//             <div className="print">My name is {name} </div>
//             <div className="print">I rendered {renderCount.current}</div>
//         </div>
//     )
// }


export default function UseRef () {

    const [name, setName] = useState('')
    const inputRef = useRef()

    function buttonfunction() {
        inputRef.current.focus()
    }

    return (
        <div>
            <input className="input-value" ref={inputRef} value={name} onChange={ e => setName(e.target.value)} />
            <div className="print">My name is {name} </div>
            <button onClick={buttonfunction}>focus</button>
        </div>
    )
}

// export default function UseRef () {

//     const [name, setName] = useState('')
//     const prevName = useRef('')

//     useEffect(() => {
//         prevName.current = name
//     }, [name])

//     return (
//         <div>
//             <input className="input-value" value={name} onChange={ e => setName(e.target.value)} />
//             <div className="print">My name is {name} and it used to be {prevName.current} </div>
//         </div>
//     )
// }