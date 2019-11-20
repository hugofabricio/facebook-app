import React from "react";
import "./style.css";
import photo from "../../assets/images/hugo.jpg";

const Avatar = () => (
  <div className="avatar">
    <img src={photo} alt="Profile Avatar" />
  </div>
);

export default Avatar;
