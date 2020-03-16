import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


const Nav = (props) => {
 let {height} = props;
  return (<>
    <div className="nav-wrapper fixed-top ">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{height: height+"px"}}>
      <div className="col-lg-3 col-md-6 h1div">
        <h1 className="text-light">Juan Carlos</h1>
      </div>
      <div className="col-lg-4 offset-lg-5 col-md-6">
        <div className="row d-flex justify-content-center">
          
        <Link className="nav-link" to="/home/">
            About
            </Link >
            <Link className="nav-link" to="/contact/">
              Contact
          </Link>
          <Link className="nav-link" to="/portfolio/">
              Portfolio
          </Link >
        </div>
      </div>

    </nav>
    </div>
    <div className="navHolder" style={{height:120}}></div></>
  );
}

export default Nav;
