import React, { useState, useEffect } from "react";
import LabeledProject from "./LabeledProject";

const Portfolio = () => {

    const [portfolioItems, setPortfolio] = useState([
        { name: "Weather Dashboard", deployedLink: "https://monguis.github.io/weather-checker/", image: "assets/images/weather.png", gitHubLink: "https://github.com/monguis/weather-checker" },
        { name: "Password Generator", image: "assets/images/passwordgen.png", deployedLink: "https://monguis.github.io/monguis.passwordgenerator.io/", gitHubLink: "https://github.com/monguis/monguis.passwordgenerator.io" },
        { name: "My First Project", image: "assets/images/project1.png", deployedLink: "https://jeffordsm.github.io/Project1/", gitHubLink: "https://github.com/JeffordsM/Project1" },
        { name: "My Second Project", image: "assets/images//project2.png", deployedLink: "https://sheltered-falls-54052.herokuapp.com/", gitHubLink: "https://github.com/BestBroBradley/project-two" },
        { name: "Burger", image: "assets/images/burger.png", deployedLink: "https://powerful-badlands-43542.herokuapp.com/", gitHubLink: "https://github.com/monguis/burger" },
        { name: "Note Taker (express.js)", image: "assets/images/notetaker.png", deployedLink: "https://vast-sands-96309.herokuapp.com/", gitHubLink: "https://github.com/monguis/express" }
    ])


    // const handlePictureClick = (evt) => {
    //     evt.preventDefault();
    //     portfolioItems.forEach(function (project) {
    //         if (project.deployedLink === evt.target.parentElement.getAttribute("data-link")) {
    //             $("#modalLink1").attr("href", project.deployedLink);
    //             $("#modalLink2").attr("href", project.gitHubLink);
    //             $("#exampleModalCenterTitle").text(project.name);
    //         }
    //     });
    // };
    // const AuxDiv = <div className="col-md-6">;
    // const closeDiv = </div>;

    const handleImageClick = (e) => {
        // e.preventDefault();
        const index = e.target.parentElement.getAttribute("index");
        const project = portfolioItems[index];
        console.log(index);
        document.getElementById("modalLink1").setAttribute("href", project.deployedLink);
        document.getElementById("modalLink2").setAttribute("href", project.gitHubLink);
        document.getElementById("exampleModalCenterTitle").textContent = project.name;

    };


    return (<div className="container">
        <div className="col-md-12 col-lg-8 col-sm-12">
            <div className="row">
                <h2>Portfolio</h2>
            </div>
            <div className="row">
                {portfolioItems.map((project, index) => {
                    return (<>


                        <LabeledProject project={project} key={project.name} index={index} handleImageClick={handleImageClick} />

                    </>
                    )
                })}
            </div>
        </div>
        {/* <div className="row">
                <div className="col-md-6">
                    <div
                        className="innerlabelpicture"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        data-link="https://monguis.github.io/monguis.passwordgenerator.io/"
                    >
                        <img
                            src="assets/images/passwordgen.png"
                            className="img-fluid"
                            alt="..."
                        />
                        <div className="innerlabel">Password Generator</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="innerlabelpicture"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        data-link="https://monguis.github.io/weather-checker/"
                    >
                        <img
                            src="assets/images/weather.png"
                            className="img-fluid"
                            alt="..."
                        />
                        <div className="innerlabel">Weather Checker</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div
                        className="innerlabelpicture"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        data-link="https://jeffordsm.github.io/Project1/"
                    >
                        <img
                            src="assets/images/project1.png"
                            className="img-fluid"
                            alt="..."
                        />
                        <div className="innerlabel">My First Project</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="innerlabelpicture"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        data-link="https://sheltered-falls-54052.herokuapp.com/"
                    >
                        <img
                            src="assets/images//project2.png"
                            className="img-fluid"
                            alt="..."
                        />
                        <div className="innerlabel">My Second Project</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div
                        className="innerlabelpicture"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        data-link="https://powerful-badlands-43542.herokuapp.com/"
                    >
                        <img src="assets/images/burger.png" className="img-fluid" alt="..." />
                        <div className="innerlabel">Burger (MySQL manipulation)</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="innerlabelpicture"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        data-link="https://vast-sands-96309.herokuapp.com/"
                    >
                        <img
                            src="assets/images/notetaker.png"
                            className="img-fluid"
                            alt="..."
                        />
                        <div className="innerlabel">Note Taker (express.js)</div>
                    </div>
                </div>
            </div>
        </div> */}
        <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">
                            My first Project
            </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <a
                            id="modalLink1"
                            href=""
                            className="list-group-item list-group-item-action"
                        >
                            Link to Website
            </a>
                        <a
                            id="modalLink2"
                            href=""
                            className="list-group-item list-group-item-action"
                        >
                            GitHub repository
            </a>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Portfolio;