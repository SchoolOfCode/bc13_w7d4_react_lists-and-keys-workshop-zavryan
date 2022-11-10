import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return (
    <main id="main">
      {posts.map(({ postId, title, date, author, text, highlights, img }) => {
        return (
          <Post
            key={postId}
            title={title}
            date={date}
            author={author}
            text={text}
            highlights={highlights}
            img={img}
          />
        );
      })}
    </main>
  );
}

export default Main;
