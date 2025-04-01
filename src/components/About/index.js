import "@fontsource/roboto";
import { TfiControlForward } from "react-icons/tfi";

import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-container">
        <h1 className="about-section-heading">About Me</h1>
        <p className="about-section-description">
          I’m Madhukar Baikana, a Frontend & Full-Stack Developer passionate
          about building scalable, high-performance web applications with a
          seamless UI/UX experience. I specialize in React.js, JavaScript
          (ES6+), and modern web technologies, with expertise in state
          management, API integration, and performance optimization.
          <br />
          <br />
          What I Do
          <br />
          ✅ Build Interactive & Scalable Web Applications
          <br />
          ✅ Develop Responsive & User-Friendly Interfaces
          <br />
          ✅ Optimize Performance & State Management
          <br />
          ✅ Implement Secure Authentication & API Integrations
          <br />
          <br />
          Projects
          <br />
          Jobby Application – A job portal with authentication, search filters,
          and detailed job listings
          <br />
          Nxt Trendz – An e-commerce platform with product search, filters, and
          cart functionality
          <br />
          <br />
          I’m actively seeking Frontend/Full-Stack Developer opportunities where
          I can contribute to innovative projects and create impactful digital
          solutions.
          <br />
          📩 Open to opportunities & collaboration! Let’s connect.
        </p>
        <h1 className="about-section-heading">Technical Skills</h1>
        <div className="technical-skills-cards-container">
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">
              Front-End Development
            </h1>
            <ul className="technologies-container">
              <li className="stack">ReactJS</li>
              <li className="stack">Javascript (ES6+)</li>
              <li className="stack">HTML5</li>
              <li className="stack">CSS3</li>
              <li className="stack">Bootstrap</li>
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">
              Back-End Development
            </h1>
            <ul className="technologies-container">
              <li className="stack">NodeJS</li>
              <li className="stack">ExpressJS</li>
              <li className="stack">REST APIs</li>
              <li className="stack">JWT Authentication</li>
              <li className="stack"> bcrypt</li>
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">
              Database Management
            </h1>
            <ul className="technologies-container">
              <li className="stack">SQLite</li>
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">State Management</h1>
            <ul className="technologies-container">
              <li className="stack">React Context API</li>
              <li className="stack">Redux</li>
              <li className="stack">React Hooks</li>
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">
              Programming Languages
            </h1>
            <ul className="technologies-container">
              <li className="stack">Python</li>
              <li className="stack">JavaScript (ES6+)</li>
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">Version Control</h1>
            <ul className="technologies-container">
              <li className="stack">GitHub</li>
              <li className="stack">Git</li>
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">
              Tools & Deployment
            </h1>
            <ul className="technologies-container">
              <li className="stack">Netlify</li>
              <li className="stack">Vercel</li>
              <li className="stack">Postman</li>
            </ul>
          </div>
        </div>
        <h1 className="about-section-heading">Experience</h1>
        <div className="experiance-container">
          <h1 className="about-page-sub-heading">
            Associate Technical Engineer
          </h1>
          <p className="sub-heading-detailing">
            Contec Design and Engineering Solution Pvt Ltd, Hyderabad
          </p>
          <p className="about-section-description">June 2020 - Ocober 2022</p>
          <p className="about-section-description">Hyderabad, India</p>
          <div className="job-description-container">
            <p className="about-section-description">
              <TfiControlForward className="paragraph-icon" />
              Developed and maintained web interfaces using HTML5, CSS3,
              JavaScript, and Bootstrap ensuring clean and efficient code.
            </p>
            <p className="about-section-description">
              <TfiControlForward className="paragraph-icon" />
              Created responsive layouts for improved user experience across
              multiple devices.
            </p>
            <p className="about-section-description">
              <TfiControlForward className="paragraph-icon" />
              Applied front-end best practices to enhance website performance
              and maintainability.
            </p>
            <p className="about-section-description">
              <TfiControlForward className="paragraph-icon" />
              Collaborated with teams to troubleshoot and enhance website
              functionality.
            </p>
          </div>
        </div>
        <h1 className="about-section-heading">Education</h1>
        <div className="education-container">
          <h1 className="about-page-sub-heading">
            TKR College of Engineering and Technology, Hyderabad, Telangana
          </h1>
          <p className="sub-heading-detailing">
            Bachelor of Technology (B.Tech), Civil Engineering
          </p>
          <p className="about-section-description duration">2015 - 2019</p>
          <h1 className="about-page-sub-heading">
            Trishool Junior College, Warangal, Telangana
          </h1>
          <p className="sub-heading-detailing">Intermediate, MPC</p>
          <p className="about-section-description duration">2013 - 2015</p>
          <h1 className="about-page-sub-heading">
            MJPTSBCWRES, Warangal, Telangana
          </h1>
          <p className="sub-heading-detailing">
            Secondary School Of Certificate
          </p>
          <p className="about-section-description duration">2013</p>
        </div>
        <h1 className="about-section-heading">Languages</h1>
        <h1 className="about-page-sub-heading">English</h1>
        <p className="sub-heading-detailing">
          Professional working proficiency
        </p>
        <h1 className="about-page-sub-heading">Hindi</h1>
        <p className="sub-heading-detailing">Intermediate</p>
        <h1 className="about-page-sub-heading">Telugu</h1>
        <p className="sub-heading-detailing">Native or bilingual proficiency</p>
        <h1 className="about-section-heading">Certifications & Training</h1>
        <p className="about-page-sub-heading">
          Completed Full-Stack Development Training at Nextwave CCBP, Hyderabad
        </p>
      </div>
    </div>
  );
};
export default About;
