import React from "react";
import NavBar from "../../components/NavBar";
import Reg from "../../assets/reg.jpg";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { Userregister } from "../../services/Register.sevice";
import Cookies from "js-cookie";
function Register() {
  let navigate = useNavigate();
  // states

  const [userData, setUserdata] = React.useState({
    name: "",
    password: "",
    email: "",
    number: "",
  });

  // validation states

  const [namevalidator, setNameValidator] = React.useState(false);
  const [passwordvalidator, setPasswordValidator] = React.useState(false);
  const [emailvalidator, setemailValidator] = React.useState(false);
  const [numbervalidator, setnumberValidator] = React.useState(false);

  // Login Route
  const LoginRoute = async () => {
    navigate("/Login");
  };
  // onchange

  const Onchange = async (e: any) => {
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  };

  const submituserData = async () => {
    if (userData.name === "") {
      setNameValidator(true);
    } else if (userData.email === "") {
      setemailValidator(true);
    } else if (userData.number === "") {
      setnumberValidator(true);
    } else if (userData.password === "") {
      setPasswordValidator(true);
    } else {
      await Userregister(userData).then((e: any) => {
        if (e.status === 200 || e.status === 201) {
          Cookies.set("token", e.data.tokens.access.token);
          navigate("/Login");
        }
      });
    }
  };

  return (
    <>
      <NavBar />
      <Loader />

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
            <p>
              User name{" "}
              {namevalidator ? (
                <span style={{ color: "red" }}>Enter userName</span>
              ) : (
                ""
              )}
            </p>
            <input
              type="text"
              required
              placeholder="User name"
              style={{ paddingLeft: "20px" }}
              name="name"
              onChange={(e) => Onchange(e)}
            />
            <p>
              E- mail{" "}
              {emailvalidator ? (
                <span style={{ color: "red" }}>Enter email</span>
              ) : (
                ""
              )}
            </p>
            <input
              type="email"
              required
              placeholder="E-mail"
              style={{ paddingLeft: "20px" }}
              name="email"
              onChange={(e) => Onchange(e)}
            />
            <p>
              Contact number{" "}
              {numbervalidator ? (
                <span style={{ color: "red" }}>Enter valid contact number</span>
              ) : (
                ""
              )}
            </p>
            <input
              type="number"
              required
              placeholder="contact number"
              style={{ paddingLeft: "20px" }}
              name="number"
              onChange={(e) => Onchange(e)}
            />
            <p>
              Password{" "}
              {passwordvalidator ? (
                <span style={{ color: "red" }}>Enter Valid Password</span>
              ) : (
                ""
              )}
            </p>
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
