import React, { Component } from "react";
import Post from "../Post";
import "./style.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Hugo Fabricio",
          avatar: "https://avatars1.githubusercontent.com/u/425678?s=460&v=4"
        },
        date: "23 Jun 2019",
        content:
          "Fala galera, Bootcamp da Rocketseat é irado, super indico você fazer também!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
            },
            content: "Vlwwww Hugo!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Hugo Fabricio",
          avatar: "https://avatars1.githubusercontent.com/u/425678?s=460&v=4"
        },
        date: "23 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Jonh Doe",
              avatar: "https://source.unsplash.com/random/420x420/?man"
            },
            content:
              "No momento não, mas fica ligado que em breve teremos novidades!"
          },
          {
            id: 2,
            author: {
              name: "Alici Mias",
              avatar: "https://source.unsplash.com/random/400x400/?woman"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section className="posts">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </section>
    );
  }
}

export default PostList;
