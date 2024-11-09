import { useContext } from "react";
import SidebarContext from "../Context/useContext";
import "./Sidebar.css"; // Import the CSS file here

const Sidebar = ({ children }) => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="sidebar-header">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10111/10111752.png"
            className={`logo ${expanded ? "expanded" : ""}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="toggle-button">
            {expanded ? (
              <img
                src="https://cdn-icons-png.flaticon.com/128/130/130882.png"
                alt=""
                srcset=""
                className="iconImg"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                alt=""
                srcset=""
                className="iconImg"
              />
            )}
          </button>
        </div>

        <ul className="sidebar-content">{children}</ul>

        <div className="sidebar-footer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/12131/12131874.png"
            alt="linux icons"
            className="image"
          />
          <div className={`user-info ${expanded ? "expanded" : ""}`}>
            <div className="user-details">
              <h4 className="user-name">Linux-DEX</h4>
              <span className="user-email">linuxdex@linux.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
