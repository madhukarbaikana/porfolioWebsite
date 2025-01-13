import "@fontsource/roboto";
import { TfiControlForward } from "react-icons/tfi";

import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-container">
        <h1 className="about-section-heading">About Me</h1>
        <p className="about-section-description">
          Hi there, I’m Madhukar Baikana, a skilled Full-Stack Developer
          specializing in ReactJS, NodeJS, ExpressJS, JavaScript and modern web
          technologies. I am passionate about creating intuitive, user-friendly
          interfaces and delivering seamless web experiences through clean and
          efficient code.
          <br />
          <br />
          With hands-on training at Nextwave CCBP, I’ve built a strong
          foundation in front-end development, mastering tools like HTML, CSS,
          Bootstrap, Python, SQL, and version control with Git. My expertise
          lies in component-based design, state management, and crafting
          responsive, interactive web applications. Fluent in English, Hindi and
          Telugu and based in Hyderabad (Open to Relocate). I’m eager to
          contribute to innovative teams and bring impactful ideas to life.
          Let’s connect and collaborate to create exceptional digital
          experiences!
        </p>
        <h1 className="about-section-heading">Technical Skills</h1>
        <div className="technical-skills-cards-container">
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">
              Front-End Development
            </h1>
            <ul className="technologies-container">
              <li className="stack">ReactJS</li>
              <li className="stack">Redux</li>
              <li className="stack">Javascript ES6+</li>
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
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">Database Management</h1>
            <ul className="technologies-container">
              <li className="stack">SQLite</li> 
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">Programming Languages</h1>
            <ul className="technologies-container">
              <li className="stack">Python</li>
              <li className="stack">JavaScript ES6+</li>
            </ul>
          </div>
          <div className="technical-skills-card">
            <h1 className="technical-skills-card-heading">Tools & Platforms</h1>
            <ul className="technologies-container">
              <li className="stack">Git</li>    
              <li className="stack">VS Code</li>
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
              {" "}
              <TfiControlForward className="paragraph-icon" />
              Enhanced technical documentation and streamlined team
              communication, resulting in improved project outcomes
            </p>
            <p className="about-section-description">
              <TfiControlForward className="paragraph-icon" />
              Worked in a collaborative environment to analyze technical
              challenges and propose solutions
            </p>
          </div>
        </div>
        <h1 className="about-section-heading">Education</h1>
        <div className="education-container">
          <h1 className="about-page-sub-heading">
            TKR College of Engineering and Technology, Hyderabad, Telangana
          </h1>
          <p className="sub-heading-detailing">BTech in Civil Engineering</p>
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
          Completed training at Nextwave CCBP, Hyderabad
        </p>
      </div>
    </div>
  );
};
export default About;
