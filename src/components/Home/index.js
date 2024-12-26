import React from 'react'
import {Link} from "react-router-dom"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import { useProjects } from '../../context/ProjectsContext';
import ProjectCard from '../ProjectCard';
import "./index.css"

const Home=()=> {

const projectsList=useProjects()

    return (
        <div className="home-container">
            <div className="home-content-container">
                <p className="details-font">Hello, I'm</p>
                <h1 className="name">Madhukar Baikana</h1>
                <p className="details-font">FrontEnd Developer</p>
                <p className="details-font email-text"> {"< madhukarbaikana17@gmail.com />"}</p>
                <div className="social-media-buttons-container">
                    <a href="https://www.linkedin.com/in/madhukar-baikana-7bm" target="_blank" rel="noreferrer">
                        <BsLinkedin className="social-meadia-icon" />
                    </a>
                    <a href="https://www.github.com/madhukarbaikana" target="_blank" rel="noreferrer">
                        <FaGithub className="social-meadia-icon" />
                    </a>
                    <a href="mailto:madhukarbaikana17@gmail.com" target="_blank" rel="noreferrer"> 
                        <BiLogoGmail className="social-meadia-icon" />
                    </a>
                </div>
                <div className="navigation-buttons-container">
                    <button className="home-button">
                        <a className="resume-anchor-tag" target="_blank" rel="noreferrer" 
                        href="https://drive.google.com/file/d/165V8BvZZuN4Z2bmoKJOGm-o-TCt1P1Mt/view?usp=sharing">
                            View Resume
                        </a> 
                    </button>
                    <Link to="/about">
                     <button className="home-button">
                        More About Madhukar
                     </button>
                    </Link>
                </div>
            </div>
            <div className="Projects-bg-container">
                <div className="projects-content-container">
                    <h1 className="home-page-heading">Featured Projects</h1>
                    <ul className="projects-container">
                        {(projectsList.slice(0,3)).map(eachProject=><ProjectCard eachProject={eachProject} key={eachProject.id}/>)}
                    </ul>
                    <Link to="/projects">
                        <button className="home-button">
                            All Projects
                        </button>
                     </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
