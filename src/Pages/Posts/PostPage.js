import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post" style={{ backgroundColor: "transparent" }}>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.datetime}</p>
            <p style={{ marginTop: "12px" }}>{post.body}</p>
            <button
              onClick={() => handleDelete(post.id)}
              style={{
                marginTop: "20px",
                padding: "7px 15px",
                background: "red",
                borderRadius: "5px",
              }}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h1>Post Not Found</h1>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
