import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css'; // Import the CSS file for styling
import logo from '../../assets/qlikpayLogo.svg';
const AuthLayout = () => {
  return (
    <div className="container">
      <div className="imageBackground">
        <div className="outer">
          <img src={logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className="inner">
          <div className="line" />
          <div className="information">
            <p>© 2023 Qlikpay</p>
          </div>
        </div>
      </div>
      <div className="form">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
