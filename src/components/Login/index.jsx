import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthLayout from '../AuthLayout';
import './index.css';
const Login = () => {
  return (
    <>
      <form className="loginContainer">
        <div>
          <label>Sign Up</label>
        </div>
      </form>
    </>
  );
};

export default Login;
