import SidebarContext from "../Context/useContext";
import { useContext } from "react";
import "./SidebarItem.css";
import { Link } from "react-router-dom";

export function SidebarItem({ text, icon, to, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className={`sidebar-item ${active ? "active" : ""}`}>
      <Link to={to} className="sidebar-link">
        <span className="icon">
          <img src={icon} alt="" className="img-Icon" />
        </span>
        <span className={`sidebar-text ${expanded ? "expanded" : "collapsed"}`}>
          {text}
        </span>
      </Link>
      {alert && (
        <div className={`alert ${expanded ? "" : "collapsed-alert"}`} />
      )}
      {!expanded && <div className="tooltip">{text}</div>}
    </li>
  );
}
