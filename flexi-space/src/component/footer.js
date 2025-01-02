import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"; // Social media icons
import "./footer.css"; // Import the CSS file
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="logo">FLEXI-SPACE</div>
      <nav>
      <Link to="/workspace">Workspaces</Link>
  <Link to="/faq">FAQ</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/blog_et_ressource">Blog et Ressource</Link>
      </nav>
      <div className="social-icons">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
      </div>
    </div>
    <p>&copy; 2024 Flexi-Space. All rights reserved.</p>
  </footer>
  );
};

export default Footer;
