// NOTE:  this for combining both the file

// import React, { Children, useContext, useState } from "react";

// const UserContext = React.createContext();

// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState();

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;
// export { UserContext };

import React from "react";

const UserContext = React.createContext();

export default UserContext;
