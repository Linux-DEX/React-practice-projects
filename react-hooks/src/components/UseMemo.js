import React, { useState, useMemo, useEffect } from 'react';

export default function UseMemo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        } 
    }, [dark])

    useEffect(() => {
        console.log('Theme changed')
    }, [themeStyles])

  return (
    <div className='flex-box'>
        <input 
        className='flex-input'
        type="number" 
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button className='flex-button'
        onChange={() => setDark(prevDark => !prevDark)}
        >
        Change Theme
        </button>
        <div 
        className='flex-cont'
        style={themeStyles}>
            {doubleNumber}
        </div>
    </div>
  )

  function slowFunction(num) {
    console.log('calling slow Function')
    for(let i=0; i <= 1000000000; i++) {}
    return num*2
  }
}
