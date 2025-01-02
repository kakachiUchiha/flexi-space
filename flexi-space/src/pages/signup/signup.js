import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import HEADER from "../../component/header";
import Footer from "../../component/footer";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Reset error
    setError("");
  
    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    // Send data to back-end API
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName,
        email,
        password, // Only send the password, not confirmPassword
      });
  
      if (response.status === 201) {
        // Redirect user to login page on successful sign-up
        navigate("/login");
      }
    } catch (err) {
      // Handle errors from the backend or network issues
      setError(err.response?.data?.message || "Something went wrong, please try again later.");
    }
  };
  

  return (
    <div>
      <HEADER />
      <div className="signup-container">
        <div className="signup-left">
          <div className="logo-container">
            <h1>FLEXI-SPACE</h1>
            <p>Your gateway to flexible workspaces</p>
          </div>
        </div>
        <div className="signup-right">
          <div className="signup-form">
            <h2>Create Your Account</h2>
            <button className="social-btn google" onClick={() => window.location.href = "http://localhost:5000/api/auth/google"}>
  <i className="fab fa-google"></i> Sign up with Google
</button>
<button className="social-btn facebook" onClick={() => window.location.href = "http://localhost:5000/api/auth/facebook"}>
  <i className="fab fa-facebook-f"></i> Sign up with Facebook
</button>

            <p className="divider">— OR —</p>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                Create Account
              </button>
            </form>
            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
