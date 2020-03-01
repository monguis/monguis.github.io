import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="col-lg-3 col-md-6 h1div">
          <h1 className="text-light">Juan Carlos</h1>
        </div>
        <div className="col-lg-4 offset-lg-5 col-md-6">
          <div className="row d-flex justify-content-center">
            {/* <div class="col-md-4"> */}
            <a className="nav-link" href="/contact/">
              Contact
        </a>
            {/* </div> */}
            {/* <div class="col-md-4"> */}
            <a className="nav-link" href="/portfolio/">
              Portfolio
        </a>
            {/* </div> */}
            {/* <div class="col-md-4"> */}
            <a className="nav-link" href="/home/">
              About
        </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
