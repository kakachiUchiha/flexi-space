import React, { useState, useEffect } from "react";
import HEADER from "../../component/header";
import Footer from "../../component/footer";
import "./home.css";
import img1 from "../../images_videos/workspace3.jpg";
import img2 from "../../images_videos/workspace1.jfif";
import img3 from "../../images_videos/workspace2.jfif";
import img4 from "../../images_videos/work.jpg";

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <HEADER />

      {/* Hero Section */}
      <section className="hero">
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1>Find Your Perfect Workspace</h1>
          <p>Explore flexible spaces tailored to your needs and goals.</p>
          <button className="btn-primary" onClick={() => window.location.href = "/workspace"}>
  Book a space
</button>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Search by location, price, or type..."
          className="search-bar"
        />
        <button className="btn-secondary">Search</button>
      </section>

      {/* Workspaces Section */}
      <section className="workspaces">
        <h2>Available Workspaces</h2>
        <div className="workspace-cards">
        {images.map((image, index) => (
  <div className="card" key={index}>
    <img src={image} alt={`Workspace ${index + 1}`} />
    <h3>{["Private Office", "Shared Workspace", "Meeting Room", "Lounge Area"][index]}</h3>
    <p>Price: {["1000", "500", "800", "600"][index]} DT/month</p>
    <button className="btn-primary" onClick={() => window.location.href = "/reservation"}>
      Book Now
    </button>
  </div>
))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At Flexi-Space, we aim to provide flexible and modern workspaces
              that inspire creativity and productivity. Whether you’re a freelancer,
              a startup, or a growing business, we have the perfect space for you.
            </p>
          </div>
          <div className="about-carousel">
            <div
              className="carousel-images"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Workspace ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
