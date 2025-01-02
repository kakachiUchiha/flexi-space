import React, { useState, useEffect } from 'react';
import './Login.css'; // For styling
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import HEADER from "../../component/header";
import Footer from "../../component/footer";

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username: login,
        password,
      });

      // Save token to localStorage (or cookies)
      localStorage.setItem('token', response.data.token);

      // Redirect to dashboard or workspace
      navigate('/workspace');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  useEffect(() => {
    document.body.classList.add('login-background');
    return () => {
      document.body.classList.remove('login-background');
    };
  }, []);

  return (
    <div>
      <HEADER />
      <div className="login-container">
        <h1>Login</h1>
        <button className="social-btn google" onClick={() => window.location.href = "http://localhost:5000/api/auth/google"}>
  <i className="fab fa-google"></i> Login with Google
</button>
<button className="social-btn facebook" onClick={() => window.location.href = "http://localhost:5000/api/auth/facebook"}>
  <i className="fab fa-facebook-f"></i> Login with Facebook
</button>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="login">Username:</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-submit">Login</button>
        </form>
        <div className="forgot-password">
          <Link to="/signup">Forgot password?</Link>
        </div>
        <div className="register-link">
          <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
