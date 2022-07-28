import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"

function Navbar() {

  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item" id="first-item">
          <Link to="/" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dm7rm8goc/image/upload/v1650361733/Media/signature_svg_yellow_dmhhfy.png"
              alt="Ahad Sajjad"
              className="signature"
            />
          </Link>
        </li>
        
        <li className="nav-item">
            <Link className="nav-link" to="/" rel="noopener noreferrer">Home</Link>
          </li> 
          <li className="nav-item">
          <Link className="nav-link" to="/projects" rel="noopener noreferrer">
            My Projects
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="projects" rel="noopener noreferrer">
            Intro
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
