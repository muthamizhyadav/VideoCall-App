import React from "react";
import Reg from "../../assets/reg.jpg";
import "./Login.css";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  // Register route
  const registerRoute = async () => {
    navigate("/Register");
  };
  return (
    <>
      <NavBar />
      <div className="login-container">
        <div className="login-right">
          <img src={Reg} alt="Login-banner" width="100%" />
        </div>
        <div className="login-left">
          <h2>Welcome back</h2>
          <p className="login-account">
            Don't have an account?<span onClick={registerRoute}> Sign up</span>
          </p>
          <div className="login-inputs">
            <p>E-mail</p>
            <input
              type="email"
              required
              placeholder="E-mail"
              style={{ paddingLeft: "20px" }}
            />
            <p>Password</p>
            <input
              type="password"
              required
              placeholder="Password"
              style={{ paddingLeft: "20px" }}
            />
            <div className="login-btn">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
