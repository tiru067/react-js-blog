import React from "react";
import "../../Components/Post.css";
const NewPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  handleSubmit,
}) => {
  return (
    <main>
      {/* <h2>New Post</h2> */}
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          id="postTitle"
          placeholder="Title"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Body</label>
        <textarea
          type="text"
          id="postBody"
          placeholder="Text"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button
          style={
            postTitle.length > 2
              ? { background: "#3598db", color: "white" }
              : null
          }
          type="submit"
        >
          Publish
        </button>
      </form>
    </main>
  );
};

export default NewPost;
