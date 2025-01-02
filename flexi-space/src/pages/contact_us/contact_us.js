import React from "react";
import "./Contact.css";
import HEADER from "../../component/header";
import Footer from "../../component/footer";

function Contact() {
  return (
    <div>
      <HEADER />
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>📱🤝 We'd love to hear from you!</p>
          <ul className="contact-links">
            <li>🌐 <a href="https://ayca.tech" target="_blank" rel="noopener noreferrer">flexi.space</a></li>
            <li>📸 <a href="https://instagram.com/ayca.tech" target="_blank" rel="noopener noreferrer">@flexi-space</a></li>
            <li>🐦 <a href="https://twitter.com/aycatech" target="_blank" rel="noopener noreferrer">@flexi-space</a></li>
            <li>👤 <a href="https://facebook.com/aycaturan" target="_blank" rel="noopener noreferrer">@flexi-space</a></li>
          </ul>
          <hr />
        </div>
        <div className="contact-right">
          <h2>Contact Us</h2>
          <p>Welcome to the help center 👋</p>
          <p>Please describe your issue and attach a file if necessary.</p>
          <form>
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <div className="file-input">
              <label htmlFor="file-upload" className="custom-file-upload">
                📂 Attach File
              </label>
              <input id="file-upload" type="file" />
            </div>
            <button type="submit" className="send-btn">📩 Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
