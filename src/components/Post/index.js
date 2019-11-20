import React from "react";
import Comment from "../Comment";
import Avatar from "../Avatar";
import "./style.css";

const Post = () => (
  <article className="post">
    <header className="post-header">
      <Avatar photo="https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.0-9/23517615_1632658530126225_5740035917628137473_n.jpg?_nc_cat=107&_nc_oc=AQm-LLtY6nItShHG7qcjKNVCgJbr4ZBfhLaaQ4KupB_BhoTlkaqXxpCwGF7jQrkvOII&_nc_ht=scontent.fjdo1-2.fna&oh=2221bd59466d71a88f4876049909794b&oe=5E572FBA" />
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
