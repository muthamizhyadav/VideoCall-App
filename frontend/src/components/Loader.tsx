import React from "react";
import "./loader.css";
function Loader(status: any) {
  status = false;
  let loader = status;
  return (
    <>
      {loader ? (
        <div className="loaders">
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Loader;
