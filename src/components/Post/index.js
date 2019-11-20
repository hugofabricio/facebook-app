import React from "react";
import Comment from "../Comment";
import Avatar from "../Avatar";
import "./style.css";

const Post = () => (
  <article className="post">
    <header className="post-header">
      <Avatar />
      <div className="post-user">
        <h3 className="post-name">Hugo Fabricio</h3>
        <time className="post-date" dateTime="2019-11-20">
          20 Nov 2019
        </time>
      </div>
    </header>
    <div className="post-content">
      <p className="post-text">
        Pessoal, alguém sabe se a Rocketseat está contratando?
      </p>
    </div>
    <div className="post-comments">
      <Comment />
      <Comment />
    </div>
  </article>
);

export default Post;
