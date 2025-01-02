import React from 'react';
import './blog.css';
import HEADER from '../../component/header';
import Footer from '../../component/footer'
const BlogResources = () => {
  return (
    <div>
        <HEADER/>
    <div className="blog-resources">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Unlock Your Productivity</h1>
            <p>Explore curated tips and resources for creating impactful workspaces.</p>
            {/* Scrolls to Featured Articles */}
            <button 
              className="cta-button" 
              onClick={() => document.getElementById('featured-articles').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Articles
            </button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured-articles" className="featured-articles">
        <h2 className="section-title">Featured Reads</h2>
        <div className="articles-container">
          {/* Article 1 */}
          <div className="article-card hover-card">
            <img src="/productivity.jpg" alt="Productivity" />
            <div className="card-content">
              <h3>Top Tips for Staying Productive</h3>
              <p>Master productivity in shared environments with these actionable strategies.</p>
              <a 
                href="https://www.indeed.com/career-advice/career-development/how-to-create-productive-workspace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="article-card hover-card">
            <img src="/ideal.jpg" alt="Ideal Workspace" />
            <div className="card-content">
              <h3>Designing the Ideal Workspace</h3>
              <p>Discover how to build spaces that inspire creativity and productivity.</p>
              <a 
                href="https://www.dgicommunications.com/create-the-ideal-workspace/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="quotes-section">
        <h2 className="section-title">Words of Wisdom</h2>
        <div className="quotes-container">
          <div className="quote-card">
            <p>“Switching to a flexible workspace transformed our productivity.”</p>
            <span>– Founder</span>
          </div>
          <div className="quote-card">
            <p>“Coworking spaces offer flexibility and foster collaboration.”</p>
            <span>– Manager</span>
          </div>
          <div className="quote-card">
            <p>“Studies show that flexible workplaces boost satisfaction by 35%.”</p>
            <span>– Analyst</span>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogResources;
