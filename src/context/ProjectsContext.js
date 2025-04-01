import React, { useContext } from "react";

import imageJobby from "../images/jobby.PNG";
import imageTrendz from "../images/nxttrendz.PNG";
import imageEmoji from "../images/emojigame.PNG";
import imageAddUser from "../images/addUserProject.PNG";
import imageFoodMunch from "../images/foodMunchWebsite.PNG";
import imageTodos from "../images/todos.PNG";
import imagePortfolioWebsite from "../images/portfolioWebsite.PNG";
import restApi from "../images/restApi.PNG";

export const ProjectsContext = React.createContext();

export const ProjectsContextProvider = ({ children }) => {
  const projectsList = [
    {
      id: 1,
      image: imageTrendz,
      title: "Trendz E-commerce Platform",
      teckStack: ["React.js", "JWT", "Javascript", "CSS", "Restful-Api"],
      liveDemoLink: "https://nxt-trendz-e-commerce-app-eight.vercel.app",
      gitHubLink: "https://github.com/madhukarbaikana/nxtTrendzE-commerceApp",
    },
    {
      id: 2,
      image: imageJobby,
      title: "Jobby App",
      teckStack: ["React.js", "JWT", "Javascript", "CSS", "Restful-Api"],
      liveDemoLink: "https://jobbyapp-kappa.vercel.app",
      gitHubLink: "https://github.com/madhukarbaikana/JobbyApp",
    },
    {
      id: 3,
      image: restApi,
      title: "REST API Development",
      teckStack: ["Node.js", "Express.js", "SQLite", "JWT", "bcrypt"],
      liveDemoLink:
        "https://github.com/madhukarbaikana/Covid-19IndiaPortalAPIs",
      gitHubLink: "https://github.com/madhukarbaikana/Covid-19IndiaPortalAPIs",
    },
    {
      id: 4,
      image: imagePortfolioWebsite,
      title: "Portfolio Website",
      teckStack: ["ReactJS", "Javascript", "CSS"],
      liveDemoLink: "https://madhukarbaikana.netlify.app/",
      gitHubLink: "https://github.com/madhukarbaikana/porfolioWebsite",
    },
    {
      id: 5,
      image: imageEmoji,
      title: "Emoji Game",
      teckStack: ["ReactJS", "Javascript", "CSS"],
      liveDemoLink: "https://emoji-game-ashy.vercel.app",
      gitHubLink: "https://github.com/madhukarbaikana/emoji_game",
    },
    {
      id: 6,
      image: imageAddUser,
      title: "Add User Website",
      teckStack: ["Javascript", "CSS", "Flexbox", "HTML"],
      liveDemoLink: "https://adduserwebmadhu.ccbp.tech/",
      gitHubLink: "https://github.com/madhukarbaikana/Add_User_website",
    },
    {
      id: 7,
      image: imageTodos,
      title: "Todos Application",
      teckStack: ["CSS", "Flexbox", "HTML"],
      liveDemoLink: "https://madhukartodoapp.ccbp.tech/",
      gitHubLink: "https://github.com/madhukarbaikana/Todo-application",
    },
    {
      id: 8,
      image: imageFoodMunch,
      title: "Food Munch Website",
      teckStack: ["Bootstrap", "CSS", "Flexbox", "HTML"],
      liveDemoLink: "https://madhukarrespons.ccbp.tech/",
      gitHubLink: "https://github.com/madhukarbaikana/Food_munch_website",
    },
    {
      id: 9,
      image: restApi,
      title: "API Handling",
      teckStack: ["redux-toolkit", "Vite", "AsyncThunk"],
      liveDemoLink:
        "https://github.com/madhukarbaikana/ApiHandlingUsingReduxToolkitAsyncThunk",
      gitHubLink:
        "https://github.com/madhukarbaikana/ApiHandlingUsingReduxToolkitAsyncThunk",
    },
  ];

  return (
    <ProjectsContext.Provider value={projectsList}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const projectsList = useContext(ProjectsContext);
  return projectsList;
};
