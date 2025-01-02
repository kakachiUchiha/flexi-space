import React, { useState, useEffect } from "react";
import HEADER from "../../component/header";
import Footer from "../../component/footer";
import "./ReservationPage.css";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    workspaceType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.startDate > formData.endDate) {
      alert("End date must be after or equal to the start date!");
      return;
    }

    console.log("Reservation Details:", formData);
    alert("Reservation submitted successfully!");
  };

  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  return (
    <div>
      <HEADER />
      <div className="reservation-page">
        <header className="reservation-header">
          <h1>Reserve Your Workspace</h1>
          <p>Find the perfect space to boost your productivity!</p>
        </header>
        <main className="reservation-content">
          <form onSubmit={handleSubmit} className="reservation-form">
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Duration:
              <div className="date-range">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
                <span>to</span>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
            <label>
              Workspace Type:
              <select
                name="workspaceType"
                value={formData.workspaceType}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Private Office">Private Office</option>
                <option value="Coworking Desk">Coworking Desk</option>
                <option value="Meeting Room">Meeting Room</option>
              </select>
            </label>
            <button type="submit" className="reserve-btn">Reserve Now</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationPage;
