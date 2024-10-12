import React, { useContext } from 'react'
import { ThemeContext } from './App'

const FunctionContextComp = () => {
    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#ccc" : "#333",
        padding: "2rem",
        margin: "2rem"
    }
  return (
    <div style={themeStyles}>function theme</div>
  )
}

export default FunctionContextComp