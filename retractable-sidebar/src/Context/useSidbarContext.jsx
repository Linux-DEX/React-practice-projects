import SidebarContext from "./useContext";
import { useState } from "react";

const SidebarContextProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
