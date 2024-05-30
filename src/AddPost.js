import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "./context/dataContextProvider";
const AddPost = () => {
  const {
    togglePost,
    setTogglePost,
    title,
    setTitle,
    body,
    setBody,
    handleTogglePost,
    handleTitle,
    handleBody,
    handleAddPost,
  } = useContext(DataContext);

  return (
    <>
      <div className="addpost">
        <button className="addpostbutton" onClick={handleTogglePost}>
          Click Here To Add A Post!
        </button>
        {togglePost && (
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
            <button
              type="submit"
              className="submitpost"
              onClick={handleAddPost}
            >
              Submit Post
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default AddPost;
