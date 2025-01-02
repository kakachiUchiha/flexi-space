import React, { useState } from "react";
import "./FAQ.css";
import HEADER from "../../component/header";
import Footer from "../../component/footer";
import { Link } from "react-router-dom";
const FAQs = [
  { question: "How can I book a workspace?", answer: "You can book a workspace through our website or contact us directly via email at support@example.com." },
  { question: "Can I share my membership with others?", answer: "Memberships are personal and cannot be shared with others." },
  { question: "What is the cancellation policy?", answer: "You can cancel your booking up to 24 hours in advance for a full refund. For detailed policies, please visit our cancellation policy page." },
];

const FAQItem = ({ faq, isActive, onClick }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="faq-header">
        <h3 className="faq-question">{faq.question}</h3>
        <span className="icon">{isActive ? "-" : "+"}</span>
      </div>
      <div className="faq-body">
        <p className="faq-answer">{faq.answer}</p>
      </div>
    </div>
  );
};

const SupportUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <HEADER/>
    <div className="faq-container">
      <div className="faq-header-wrapper">
        <h1 className="page-title">Support</h1>
        <p className="page-description">
          Your satisfaction is our priority. Find answers to your questions or contact us directly via our <Link to="/contact">contact</Link> page.
        </p>
      </div>
      <div className="faq">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isActive={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};



export default SupportUs;
