import React, { useState ,useEffect} from "react"

const Footer = () => {

  const [height, setHeight] = useState(500)
  // useEffect(() => {
  //   setHeight(100)

  // }, []);

  return (
    <div className="footer-wrapper fixed-bottom " style={{ zIndex: 1000 }}>
      <footer className="bg-dark " style={{ zIndex: 1010,
    height: height+"px" }}>
        <a href="https://www.linkedin.com/in/juan-carlos-castellanos-navarro-568433116/"><i className="fab footerIcon fa-github"></i></a><i className="fab footerIcon fa-linkedin-in"></i><i className="fab footerIcon fa-facebook-f"></i><i className="far footerIcon fa-file"></i>

      </footer>
    </div>
  )
};

export default Footer;

  // <p>Some footer nonsen 
  // </p>

  // <i className="fab footerIcon fa-github"></i></a><i className="fab footerIcon fa-linkedin-in"></i><i className="fab footerIcon fa-facebook-f"></i><i className="far footerIcon fa-file"></i>