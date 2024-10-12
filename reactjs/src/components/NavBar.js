import React from "react";
import { Link } from "react-router-dom";

export default function NavBar () {
    return(
        <div className="nav-bar">
            <img src="../images/logo.png" alt="" className="nav-img"/>
            <h3 className="nav-name">Itachi Uchiha</h3>
            <ul>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/Story">Stroy</a></li>
                <li><a href="/Wallpaper">Wallpaper</a></li>
                <li><a href="/Family">Family</a></li> */}
                <li><a href="/">Home</a></li>
                <li><Link to="/Story">Story</Link></li>
                <li><Link to="/Wallpaper">Wallpaper</Link></li>
                <li><Link to="/Family">Family</Link></li>
            </ul>
            <input type="text" placeholder="search" className="nav-search" />
            <button className="nav-button">submit</button>
        </div>
    )
}   