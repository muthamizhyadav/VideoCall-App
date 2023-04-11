import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar";
import banner from "../../assets/banner1.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  // join Route
  let navigate = useNavigate();
  const OnclickJoin = async () => {
    navigate("/Register");
  };
  return (
    <>
      <NavBar />
      <div className="home-container">
        <img src={banner} alt="home-banner" width="100%" />
        <h1>Distance is no longer a matter</h1>
        <button className="btn" onClick={OnclickJoin}>
          Join
        </button>
      </div>
    </>
  );
}

export default Home;
