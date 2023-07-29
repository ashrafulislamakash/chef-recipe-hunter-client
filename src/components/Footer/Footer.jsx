import React from "react";
import "./Footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="d-flex justify-content-center align-items-center footer">
      <div>
        <h3 className="display-6 fw-semibold text-white">Chef's Palette</h3>
        <p>Designed & Developed by ph Chef</p>
        <p>Copyright ph Chef {year}&copy;</p>
      </div>
    </div>
  );
};

export default Footer;
