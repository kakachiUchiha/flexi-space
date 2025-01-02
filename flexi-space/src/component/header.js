import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./header.css"; // Import the CSS file
import { Link } from "react-router-dom";
import img from "../images_videos/logo.png"
const HEADER = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* Logo aligné à gauche */}
        <div className="logo">
          <Link to="/">
            <img src={img} alt="Flexi-Space Logo" className="logo-image" />
          </Link>
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
  );
};

export default HEADER;
