import React from "react";
import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "./context/dataContextProvider";
const EditPost = () => {
  const {
    handleEditTrigger,
    editTrigger,
    title,
    handleTitle,
    body,
    handleBody,
    handleEditPost,
    posts,
    setTitle,
    setBody,
  } = useContext(DataContext);
  const { id } = useParams();
  const currentPost = posts.find((post) => post.id == id);
  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setBody(currentPost.body);
    }
  }, []);

  return (
    <>
      <button type="submit" className="editbutton" onClick={handleEditTrigger}>
        Edit Post
      </button>
      {editTrigger && (
        <form className="">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="title"
            id="title"
            value={title}
            onChange={handleTitle}
          />
          <label htmlFor="body">Body</label>
          <input
            type="text"
            placeholder="body"
            id="body"
            value={body}
            onChange={handleBody}
          />
          <button type="submit" onClick={(e) => handleEditPost(e, id)}>
            Submit Edit
          </button>
        </form>
      )}
    </>
  );
};

export default EditPost;
