import React from "react";
import "./style.css";

const Avatar = ({ photo }) => (
  <div className="avatar">
    <img src={photo} alt="Profile Avatar" />
  </div>
);

export default Avatar;
