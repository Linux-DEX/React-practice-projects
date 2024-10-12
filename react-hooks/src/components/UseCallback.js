//The React useCallback Hook returns a memoized callback function
//The useCallback Hook only runs when one of its dependencies update.
// it will render all the page so if useCallback() is not used when we toggle from dark mode i will render the page again
// to prevent this we use useCallback

import React, { useState, useCallback } from 'react';
import List from './List';

export default function UseCallback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((incr) => {
        return [number + incr, number + 1 + incr, number + 2 + incr]
    }, [number] )

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

  return (
    <div style = {theme} className="flex-box">
        <input 
        className='flex-input'
        type="number" 
        value={number}
        onChange={ e => setNumber(parseInt(e.target.value))}
        />
        <button className='flex-button'
        onClick={() => setDark(prevDark => !prevDark)}>
            Toggle theme
        </button>
        <List getItems = {getItems} />
    </div>
  )
}
