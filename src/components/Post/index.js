import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, img }) {
  return (
    <article>
      <h1>{title}</h1>
      <time>{date}</time>
      <h3>{author}</h3>
      <p>{text}</p>
      {highlights.map((prop) => {
        return <mark key={prop}>{prop}</mark>;
      })}
      <img src={img.link} alt={img.alt}></img>
    </article>
  );
}

export default Post;
