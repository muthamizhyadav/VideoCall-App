import React from "react";
import Reg from "../../assets/reg.jpg";
import "./Login.css";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../../services/Register.sevice";
import Cookies from "js-cookie";

function Login() {
  let navigate = useNavigate();

  // states

  const [userLogin, setUserLogin] = React.useState({ email: "", password: "" });
  const [emailvalidation, setemailvalidation] = React.useState(false);
  const [passwordvalidation, setpasswordValidation] = React.useState(false);

  // onchange Function

  const onchangeFun = async (e: any) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const LoginClick = async () => {
    console.log(userLogin);
    if (userLogin.email === "") {
      setemailvalidation(true);
    } else if (userLogin.password === "") {
      setpasswordValidation(true);
    } else {
      await UserLogin(userLogin).then((e: any) => {
        if (e.status === 200 || e.status === 201) {
          Cookies.set("name", e.data.user.name);
          Cookies.set("email", e.data.email);
          navigate("/Lobby");
        }
      });
    }
  };

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
            <p>
              E-mail{" "}
              {emailvalidation ? (
                <span style={{ color: "red" }}>E-mail is Required</span>
              ) : (
                ""
              )}
            </p>
            <input
              type="email"
              required
              placeholder="E-mail"
              name="email"
              onChange={(e) => onchangeFun(e)}
              style={{ paddingLeft: "20px" }}
            />
            <p>
              Password{" "}
              {passwordvalidation ? <span>PassWord is Required</span> : ""}
            </p>
            <input
              type="password"
              required
              name="password"
              onChange={(e) => onchangeFun(e)}
              placeholder="Password"
              style={{ paddingLeft: "20px" }}
            />
            <div className="login-btn">
              <button onClick={LoginClick}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
