import React, { useState, useEffect } from "react";
import LabeledProject from "./LabeledProject";
import {Button,Modal} from 'react-bootstrap';
import ProjectModal from "../../components/ProjectModal/"
const Portfolio = () => {

    const [portfolioItems, setPortfolio] = useState([
        { name: "Weather Dashboard", deployedLink: "https://monguis.github.io/weather-checker/", image: "/assets/images/weather.png", gitHubLink: "https://github.com/monguis/weather-checker" },
        { name: "Password Generator", image: "/assets/images/passwordgen.png", deployedLink: "https://monguis.github.io/monguis.passwordgenerator.io/", gitHubLink: "https://github.com/monguis/monguis.passwordgenerator.io" },
        { name: "My First Project", image: "/assets/images/project1.png", deployedLink: "https://jeffordsm.github.io/Project1/", gitHubLink: "https://github.com/JeffordsM/Project1" },
        { name: "My Second Project", image: "/assets/images//project2.png", deployedLink: "https://sheltered-falls-54052.herokuapp.com/", gitHubLink: "https://github.com/BestBroBradley/project-two" },
        { name: "Burger", image: "/assets/images/burger.png", deployedLink: "https://powerful-badlands-43542.herokuapp.com/", gitHubLink: "https://github.com/monguis/burger" },
        { name: "Note Taker (express.js)", image: "/assets/images/notetaker.png", deployedLink: "https://vast-sands-96309.herokuapp.com/", gitHubLink: "https://github.com/monguis/express" }
    ])


    const [show, setShow] = useState({
        show:false,
        github:"",
        title:"",
        website:""
    });

    const handleClose = () => setShow({...show, show:false});
    const handleShow = () => setShow({...show, show:true});



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
      console.log (e.target.parentElement.getAttribute("index"));
      const foundItem = e.target.parentElement.getAttribute("index");
      setShow({
        show:true,
        github:portfolioItems[foundItem].gitHubLink,
        title:portfolioItems[foundItem].name,
        website:portfolioItems[foundItem].deployedLink
    })

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
            <>
      <Button variant="primary" onClick={handleImageClick}>
        Launch demo modal
      </Button>
      <ProjectModal handleClose={handleClose} {...show}/>
      
    </>
        </div>
    </div>

    )
}

export default Portfolio;