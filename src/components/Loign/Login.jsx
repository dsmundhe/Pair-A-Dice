import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate('/');
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
