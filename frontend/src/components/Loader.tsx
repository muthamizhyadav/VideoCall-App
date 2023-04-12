import React from "react";
import "./loader.css";
function Loader(status: any) {
  status = true;
  let loader = status;
  return (
    <div className="loaders">
      <div className="loader-container">
        {loader ? <span className="loader"></span> : ""}
      </div>
    </div>
  );
}

export default Loader;
