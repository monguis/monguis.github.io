import React from "react";

const Home = () => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md">
                <h2>About Me</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md">
                <img
                    src="assets/images/index.png"
                    id="mainpic"
                    className="img-thumbnail p-3 m-3 mh-50 h-33 img-fluid mt-0"
                />
                <p>
                    As somebody that moved in from down south, becoming part of a new
                    society is always a challenge. Hello, My name is Juan Castellanos and
                    this is the way I want to introduce myself to you, the reader. I was
                    born in Mexico in 1990, Graduated as a Computer Engineer from the
                    University of Guadalajara in 2015, I moved to USA the same year. Before
                    I moved, I used to own a cyber cafe where I developed some basic IT
                    knowledge and love for computer science. My goal was always thrive as a
                    developer in a new country, and now I'm closer than ever. This story
                    will be updated every now and then, please stay in touch.
        </p>
            </div>
        </div>
        <div className="row ">
            <div className="col-md bg-dark">
                <div className="list-group pt-3">
                    <a
                        href="https://www.linkedin.com/in/juan-carlos-castellanos-navarro-568433116/"
                        className="list-group-item list-group-item-action"
                    >
                        LinkedIn Profile
          </a>
                    <a
                        href="https://monguis.github.io/monguis.bootstrap.portfolio.github.com/assets/Juan%20Carlos%20Castellanos%20Navarro%20resume.docx"
                        className="list-group-item list-group-item-action"
                    >
                        Resume
          </a>
                    <a
                        href="https://github.com/monguis"
                        className="list-group-item list-group-item-action"
                    >
                        GitHub Profile
          </a>
                    <a
                        href="mailto:jccnnetwork@gmail.com"
                        className="list-group-item list-group-item-action"
                    >
                        email me: jccnnetwork@gmail.com
          </a>
                    <p className="list-group-item">mobile: 720-971-0087</p>
                </div>
            </div>
        </div>
        <br />
        <br />
    </div>
  )
}

export default Home;