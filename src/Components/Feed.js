import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post id={post.id} post={post} key={post.id} />
      ))}
    </>
  );
};

export default Feed;
