import React from 'react'
import {Link} from "react-router-dom"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import imageJobby from "../../images/jobby.PNG";
import imageTrendz from "../../images/nxttrendz.PNG"
import imageEmoji from "../../images/emojigame.PNG"

import ProjectCard from '../ProjectCard';
import "./index.css"

const projectsList=[{
    id:1,
    image:imageJobby,
    title:"Jobby App",
    teckStack:["ReactJS","Javascript","CSS", "Restful-Api"],
    liveDemoLink:"https://jobbyapp-kappa.vercel.app",
    gitHubLink:"https://github.com/madhukarbaikana/JobbyApp"
},
{
    id:2,
    image:imageTrendz,
title:"Trendz E-commerce Platform",
    teckStack:["ReactJS","Javascript","CSS","Restful-Api"],
    liveDemoLink:"https://nxt-trendz-e-commerce-app-eight.vercel.app",
    gitHubLink:"https://github.com/madhukarbaikana/nxtTrendzE-commerceApp"
},
{
    id:3,
    image:imageEmoji,
    title:"Emoji Game",
    teckStack:["ReactJS","Javascript","CSS"],
    liveDemoLink:"https://emoji-game-ashy.vercel.app",
    gitHubLink:"https://github.com/madhukarbaikana/emoji_game"
}
]

const Home=()=> {
    return (
        <div className="home-container">
            <div className="home-content-container">
                <p className="details-font">Hello, I'm</p>
                <h1 className="name">Madhukar Baikana</h1>
                <p className="details-font">FrontEnd Developer</p>
                <p className="details-font email-text"> {"< madhukarbaikana17@gmail.com />"}</p>
                <div className="social-media-buttons-container">
                    <a href="https://www.linkedin.com/in/madhukar-baikana-7bm" target="_blank">
                    <BsLinkedin className="social-meadia-icon" />
                    </a>
                    <a href="https://www.github.com/madhukarbaikana" target="_blank">
                    <FaGithub className="social-meadia-icon" />
                    </a>
                    <a href="mailto:madhukarbaikana17@gmail.com" target="_blank"> 
                    <BiLogoGmail className="social-meadia-icon" />
                    </a>
                </div>
                <div className="navigation-buttons-container">
                    <button className="home-button">
                        <a className="resume-anchor-tag" target="_blank" 
                        href="https://drive.google.com/file/d/11OHaJPS9PAp-kb35ww4ujfheQu3yH8Cy/view?usp=drive_link">
                            View Resume
                        </a> 
                    </button>
                    <Link to="/about">
                     <button className="home-button">
                        More About Madhukar
                     </button></Link>
                </div>
            </div>
            <div className="Projects-bg-container">
                <div className="projects-content-container">
                    <h1 className="home-page-heading">Featured Projects</h1>
                    <ul className="projects-container">
                        {projectsList.map(eachProject=><ProjectCard eachProject={eachProject} key={eachProject.id}/>)}
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
