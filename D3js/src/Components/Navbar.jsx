import React from "react";
import SidebarContextProvider from "../Context/useSidebarContext";
import Sidebar from "./Sidebar";
import { SidebarItem } from "./SidebarItem";
import { useLocation } from "react-router-dom";

const ItemSidebar = [
  {
    to: "/",
    text: "Home",
    icon: "https://cdn-icons-png.flaticon.com/128/1946/1946436.png",
  },
  {
    to: "/dashboard",
    text: "Dashboard",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828791.png",
  },
  {
    to: "/bars",
    text: "Bars",
    icon: "https://cdn-icons-png.flaticon.com/128/149/149093.png",
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <SidebarContextProvider>
        <main className="App">
          <Sidebar>
            {/* <SidebarItem to="/dashboard" size={20} text={"Dashboard"} active />
            <SidebarItem size={20} text={"dashboard"} />
            <SidebarItem size={20} text={"dashboard"} alert />
            <hr className="my-3" />
            <SidebarItem to="/" size={20} text={"Home"} /> */}
            {ItemSidebar.map((item, index) => (
              <SidebarItem
                key={index}
                to={item.to}
                text={item.text}
                icon={item.icon}
                active={location.pathname === item.to}
              />
            ))}
          </Sidebar>
        </main>
      </SidebarContextProvider>
    </>
  );
};

export default Navbar;
