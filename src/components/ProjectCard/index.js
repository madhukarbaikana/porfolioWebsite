import { FiExternalLink } from "react-icons/fi";

import "./index.css"

const ProjectCard=({eachProject})=>{

const {id,image,title,teckStack,liveDemoLink,gitHubLink}=eachProject

return(
    <li className="project-card" key={id}>
        <img src={image} alt="project-image" className="project-thubnail"/>
        <h1 className="poject-title">{title}</h1>
        <ul className="tech-stack-container">
            {teckStack.map((eachItem,index)=>{
                return <li className='tech-stack' key={index}>{eachItem}</li>
            })}
        </ul>
        <div className="project-links-container">
            <div className="project-link">
                <a href={liveDemoLink} target="_blank" className="anchor-element" rel="noreferrer"> 
                    Live 
                    <FiExternalLink className="react-icon"/>
                </a>
            </div>
            <div className="project-link">
                <a href={gitHubLink} target="_blank" className="anchor-element" rel="noreferrer"> 
                    GitHub
                    <FiExternalLink className="react-icon"/>
                </a>
            </div>
        </div>
    </li>
)

}

export default ProjectCard