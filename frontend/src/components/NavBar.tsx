import React from "react";
import "./NavBar.css";
import { List } from "../utils/Nav";
import { useNavigate } from "react-router-dom";
function NavBar() {
  let navigate = useNavigate();
  // Login Route
  const LoginRoute = async () => {
    navigate("/Login");
  };
  return (
    <div className="nav-container">
      <div className="nav">
        {List.map((e) => (
          <span key={e.title}>{e.title}</span>
        ))}

        <button onClick={LoginRoute}>Login</button>
      </div>
      <div className="nav-login"></div>
    </div>
  );
}

export default NavBar;
