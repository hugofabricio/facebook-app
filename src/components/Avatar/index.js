import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Avatar = ({ photo, size }) => (
  <div className={`avatar ${size}`}>
    <img src={photo} alt="Profile Avatar" />
  </div>
);

Avatar.defaultProps = {
  size: "-default"
};

Avatar.propTypes = {
  photo: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["-default", "-tiny"])
};

export default Avatar;
