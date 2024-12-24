import ProjectCard from "../ProjectCard"
import {useProjects} from "../../context/ProjectsContext"

import "./index.css"

const Projects=()=>{
    const projectsList=  useProjects()
    return (
        <div className="projects-section-container">
            <div className="projects-section-content-container">
                <h1 className="projects-section-heading">Projects</h1>
                <p className="projects-section-description">
                    I love doing everything from scratch.
                    Here are some of my favorite ones which 
                    sum up my knowledge. I have done many small 
                    projects from different courses and challenges to
                    learn the basics. You can check them on my  
                    <a href="https://www.github.com/madhukarbaikana" target="_blank" className="gitlink-element" rel="noreferrer">
                        <span className="highliting-text"> Github</span> 
                    </a>
                </p>
                <ul className="projects-section-projects-container">
                    {projectsList.map(eachProject=><ProjectCard eachProject={eachProject} key={eachProject.id}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Projects