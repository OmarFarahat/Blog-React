import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./context/dataContextProvider";
const DeletePost = () => {
  const { id } = useParams();
  const { handleDeletePost } = useContext(DataContext);
  return (
    <>
      <button
        type="submit"
        className="deletebutton"
        onClick={(e) => handleDeletePost(e, id)}
      >
        Delete Post
      </button>
    </>
  );
};

export default DeletePost;
