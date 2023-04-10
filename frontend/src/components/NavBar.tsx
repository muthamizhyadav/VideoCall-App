import React from "react";
import "./NavBar.css";
import { List } from "../utils/Nav";
function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav">
        {List.map((e) => (
          <span>{e.title}</span>
        ))}
        <button>Login</button>
      </div>
      <div className="nav-login"></div>
    </div>
  );
}

export default NavBar;
