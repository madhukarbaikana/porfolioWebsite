import {Link,NavLink} from "react-router-dom"
import "./index.css"

const Header=()=>{

    return (
    <nav className="nav-container">
        <h1 className="website-logo">
           <Link to="/" className="nav-link-text">MB</Link> 
        </h1>
        <ul className="nav-items-list-container">
            <li className="nav-list-item" >
              <NavLink to="/" className="nav-link-text">Home</NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/about" className="nav-link-text">About</NavLink>
            </li>
            <li className="nav-list-item">
            <NavLink to="/projects" className="nav-link-text">Projects</NavLink>
            </li>
            <li className="nav-list-item">
            <NavLink to="/contact" className="nav-link-text">Contact</NavLink>
            </li>
        </ul>
    </nav>)
}

export default Header