import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className="nav-wrapper" style={{height:"20%"}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="col-lg-3 col-md-6 h1div">
        <h1 className="text-light">Juan Carlos</h1>
      </div>
      <div className="col-lg-4 offset-lg-5 col-md-6">
        <div className="row d-flex justify-content-center">
          <Link className="nav-link" to="/contact/">

              Contact
    
          </Link>
          <Link className="nav-link" to="/portfolio/">
              Portfolio
          </Link >
          <Link className="nav-link" to="/home/">

              About

          </Link >
        </div>
      </div>

    </nav>
    </div>
  );
}

export default Nav;
