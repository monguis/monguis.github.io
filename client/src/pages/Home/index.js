import React from "react";

const Home = () => {
    return (
        <div className="container d-flex align-items-center">

            <div className="row d-flex ">
                <div className="col-md ">
                    <div id="pictureWrapper">
                        <img
                            src="/assets/images/index.png"
                            id="mainpic"
                            className="img-thumbnail mh-50 h-33 img-fluid"
                        />
                    </div>
                    <br></br>
                    <h2>About Me</h2>
                    <hr></hr>
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

        </div>
    )
}

export default Home;