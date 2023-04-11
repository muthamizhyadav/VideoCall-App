import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar";
import banner from "../../assets/banner1.png";
import "./Home.css";
function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <img src={banner} alt="home-banner" width="100%" />
        <h1>Distance is no longer a matter</h1>
        <button className="btn">Join</button>
      </div>
    </>
  );
}

export default Home;
