import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <>
      <article className="post">
        <Link to={`./post/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <p>{post.datetime}</p>
        <p>
          {post.body.length <= 120
            ? post.body
            : `${post.body.slice(0, 120)}...`}
        </p>
      </article>
      <div className="line"></div>
    </>
  );
};

export default Post;
