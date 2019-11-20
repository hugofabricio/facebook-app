import React from "react";
import Avatar from "../Avatar";
import "./style.css";

const Comment = () => (
  <div className="comment">
    <Avatar photo="https://media.licdn.com/dms/image/C4D03AQF8tYAjGopniw/profile-displayphoto-shrink_800_800/0?e=1579737600&v=beta&t=EyvwejJpXEXJ_MdxgnFYYSGts6JhjOvV4tmzzI8MsPw" />
    <div className="comment-ballon">
      <p className="comment-text">
        <span>Diego Fernandes</span> A Rocketseat está sempre em busca de novos
        membros para o time, e geralmente ficamos de olho em quem se destaca no
        Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do
        Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e
        criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse
        comentário é real)
      </p>
    </div>
  </div>
);

export default Comment;
