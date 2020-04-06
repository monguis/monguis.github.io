import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Nav = (props) => {
  let lastScrollY = 0;
  const { height, accessed } = props;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = () => {
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      console.log("down")
    } else {
      console.log("up")
    }
    lastScrollY = currentScrollY
  };

  return (<>
    <div className=" fixed-top hiddenMenuWrapper" >
<div className=" hiddenMenu" style={{height: (height + (accessed ? window.innerWidth <= 992 ? 100 : 0 : 0)) + "px" }}>
  sdfsdf
</div>
    </div>

    <div className="navHolder" style={{ height: (height) + "px" }}>
    </div>
    <div className="nav-wrapper fixed-top ">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ height: (height + (accessed ? window.innerWidth <= 992 ? 100 : 0 : 0)) + "px" }}>
        <div style={{ transition: "all 0.7s", fontSize: " 2rem", zIndex: 10 }} className={` 	col-xl-${accessed ? "3" : "6"} col-lg-6 h1div col-sm-12`}>
          <Link to="/home/">
            <h1 id="mainLink">{accessed ? "Juan Carlos" : "Juan Carlos Castellanos Navarro "}</h1>
          </Link >
        </div>
        <div className="col-xl-4 offset-xl-5 col-lg-6 col-sm-12 d-flex justify-content-center align-items-start" style={{ opacity: accessed ? 1 : 0 }}>
          <div className="row">

            <Link className="nav-link" to="/home/">
              About
            </Link >
            <Link className="nav-link" to="/contact/">
              Contact
          </Link>
            <Link className="nav-link" to="/portfolio/">
              Portfolio
          </Link >
            <Link className="nav-link" to="/resume/">
              Resume
          </Link >
          </div>
        </div>

      </nav>
    </div>


  </>
  );

}

export default Nav;
