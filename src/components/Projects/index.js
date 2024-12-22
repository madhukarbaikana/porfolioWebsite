import ProjectCard from "../ProjectCard"
import imageJobby from "../../images/jobby.PNG";
import imageTrendz from "../../images/nxttrendz.PNG"
import imageEmoji from "../../images/emojigame.PNG"
import imageAddUser from "../../images/addUserProject.PNG"
import imageFoodMunch from "../../images/foodMunchWebsite.PNG"
import imageTodos from "../../images/todos.PNG"

import "./index.css"
const newProject={
    id:6,
    image:imageTodos,
    title:"Todos Application",
    teckStack:["CSS","Flexbox","HTML"],
    liveDemoLink:"https://madhukartodoapp.ccbp.tech/",
    gitHubLink:"https://github.com/madhukarbaikana/Todo-application"
};
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
},{
    id:4,
    image:imageAddUser,
    title:"Add User Website",
    teckStack:["Javascript","CSS","Flexbox","HTML"],
    liveDemoLink:"https://adduserwebmadhu.ccbp.tech/",
    gitHubLink:"https://github.com/madhukarbaikana/Add_User_website"
},
{
    id:5,
    image:imageTodos,
    title:"Todos Application",
    teckStack:["CSS","Flexbox","HTML"],
    liveDemoLink:"https://madhukartodoapp.ccbp.tech/",
    gitHubLink:"https://github.com/madhukarbaikana/Todo-application"
},
{
    id:6,
    image:imageFoodMunch,
    title:"Food Munch Website",
    teckStack:["Bootstrap","CSS","Flexbox","HTML"],
    liveDemoLink:"https://madhukarrespons.ccbp.tech/",
    gitHubLink:"https://github.com/madhukarbaikana/Food_munch_website"
}

]

const Projects=()=>{
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
                <a href="https://www.github.com/madhukarbaikana" target="_blank" className="gitlink-element">
                <span className="highliting-text"> Github</span> 
                </a>
            </p>
                <ul className="projects-section-projects-container">
                    {projectsList.map(eachProject=><ProjectCard eachProject={eachProject}/>)}
                </ul>
            </div>

        </div>
        
    )
}

export default Projects