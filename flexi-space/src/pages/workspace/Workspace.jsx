import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import workspaceImage from "../../images_videos/work.jpg";
import WorkSpaces from "../../component/WorkSpaces";
import Footer from "../../component/footer";
import img from "../../images_videos/logo.png"
import "./Workspace.css";

function Workspace() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          {/* Logo aligné à gauche */}
          <div className="logo">
            <Link to="/">
              <img src={img} alt="Flexi-Space Logo" className="logo-image" />
            </Link>
          </div>

          {/* Barre de recherche au centre */}
          <div className="searchbar">
            <input type="text" placeholder="Search for a workspace..." />
            <button>Search</button>
          </div>

          {/* Liens de navigation centrés */}
          <div className="nav-links">
            <Link to="/workspace">Workspaces</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog_et_ressource">Blog et Ressource</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </div>

          {/* Icône utilisateur */}
          <Link to="/profile" className="user-icon-link">
            <FaUserCircle className="user-icon" />
          </Link>
        </nav>
      </header>

      <div className="home" style={{ backgroundImage: `url(${workspaceImage})` }}>
        <div className="headerContainer">
          <h1 className="elevate">Elevate Your Work</h1>
          <h1 className="cowork">with Cowork</h1>
          <Link to="/reservation">
            <button>BOOK A SPACE</button>
          </Link>
        </div>
      </div>

      <div>
        <WorkSpaces />
      </div>

      <Footer />
    </div>
  );
}

export default Workspace;
