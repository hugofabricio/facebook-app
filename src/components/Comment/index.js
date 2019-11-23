import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import "./style.css";

const Comment = ({ data }) => (
  <div className="comment">
    <Avatar size="-tiny" photo={data.author.avatar} />
    <div className="comment-ballon">
      <p className="comment-text">
        <span>{data.author.name}</span> {data.content}
      </p>
    </div>
  </div>
);

Comment.propTypes = {
  data: PropTypes.object.isRequired
};

export default Comment;
