import React from "react"

const Footer = (props) => {

  const { height,handleHeight } = props;

  return (
    <><div className="footerHolder" style={{ height: 120 }}></div>
      <div className="footer-wrapper fixed-bottom " style={{ zIndex: 1000 }}>
        <footer className="bg-dark " style={{
          zIndex: 1010,
          height: height + "px"
        }}>
         
          <a href="https://www.linkedin.com/in/juan-carlos-castellanos-navarro-568433116/"><i className="fab footerIcon fa-github"></i></a><i className="fab footerIcon fa-linkedin-in"></i><i className="fab footerIcon fa-facebook-f"></i><i className="far footerIcon fa-file"></i>
          <br></br><br></br><br></br><br></br>
        <button onClick={()=>handleHeight(100)}>aaa</button>
        </footer>
      </div>
    </>
  )
};

export default Footer;