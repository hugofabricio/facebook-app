import React from "react";
import PropTypes from "prop-types";
import Comment from "../Comment";
import Avatar from "../Avatar";
import "./style.css";

const Post = ({ data }) => (
  <article className="post">
    <header className="post-header">
      <Avatar photo={data.author.avatar} />
      <div className="post-user">
        <h3 className="post-name">{data.author.name}</h3>
        <time className="post-date" dateTime={data.date}>
          {data.date}
        </time>
      </div>
    </header>
    <div className="post-content">
      <p className="post-text">{data.content}</p>
    </div>
    <div className="post-comments">
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  </article>
);

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;
