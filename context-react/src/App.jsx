import { createContext, useState } from "react";
import "./App.css";
import FunctionContextComp from "./FunctionContextComp";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/useUserContext";

export const ThemeContext = createContext();

// function App() {
//   const [dartTheme, setDarkTheme] = useState(true);
//
//   function toggleTheme() {
//     setDarkTheme((prevDarkTheme) => !prevDarkTheme);
//   }
//
//   return (
//     <>
//       <ThemeContext.Provider value={dartTheme}>
//         <button onClick={toggleTheme}>toggle theme</button>
//         <FunctionContextComp />
//       </ThemeContext.Provider>
//     </>
//   );
// }

function App() {
  return (
    <UserContextProvider>
      <h2>login system</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
