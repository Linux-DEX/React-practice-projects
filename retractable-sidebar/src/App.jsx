import "./App.css";
import Sidebar from "./Components/Sidebar";
import { SidebarItem } from "./Components/SidebarItem";
import SidebarContextProvider from "./Context/useSidbarContext";

function App() {
  return (
    <>
      <SidebarContextProvider>
        <main className="App">
          <Sidebar>
            <SidebarItem size={20} text={"dashboard"} active />
            <SidebarItem size={20} text={"dashboard"} />
            <SidebarItem size={20} text={"dashboard"} alert />
            <hr className="my-3" />
            <SidebarItem size={20} text={"dashboard"} />
          </Sidebar>
        </main>
      </SidebarContextProvider>
    </>
  );
}

export default App;
