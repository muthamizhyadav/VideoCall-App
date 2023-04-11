import React from "react";
import NavBar from "../../components/NavBar";
import Reg from "../../assets/reg.jpg";
import "./Register.css";
import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();

  // states

  const [userData, setUserdata] = React.useState({
    name: "",
    password: "",
    email: "",
    number: "",
  });

  // Login Route
  const LoginRoute = async () => {
    navigate("/Login");
  };
  // onchange

  const Onchange = async (e: any) => {
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  };

  const submituserData = ()=>{
    console.log(userData)
  }

  return (
    <>
      <NavBar />
      <div className="register-container">
        <div className="register-right">
          <img src={Reg} alt="" width="100%" />
        </div>
        <div className="register-left">
          <h2>Create on account</h2>
          <h5>
            Already a member? <span onClick={LoginRoute}>Login</span>
          </h5>
          <div className="register-inputs">
            <p>User name</p>
            <input
              type="text"
              required
              placeholder="User name"
              style={{ paddingLeft: "20px" }}
              name="name"
              onChange={(e) => Onchange(e)}
            />
            <p>E- mail</p>
            <input
              type="email"
              required
              placeholder="E-mail"
              style={{ paddingLeft: "20px" }}
              name="email"
              onChange={(e) => Onchange(e)}
            />
            <p>Contact number</p>
            <input
              type="number"
              required
              placeholder="contact number"
              style={{ paddingLeft: "20px" }}
              name="number"
              onChange={(e) => Onchange(e)}
            />
            <p>Password</p>
            <input
              type="password"
              required
              placeholder="password"
              style={{ paddingLeft: "20px" }}
              name="password"
              onChange={(e) => Onchange(e)}
            />
            <p>Confirm password</p>
            <input
              type="password"
              required
              placeholder="Confirm password"
              style={{ paddingLeft: "20px" }}
              name="confirmpassword"
              onChange={(e) => Onchange(e)}
            />
            <div className="Register-button">
              <button onClick={submituserData}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
