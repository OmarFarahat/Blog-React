import React from "react";
import { useContext } from "react";
import { DataContext } from "./context/dataContextProvider";
import { Link } from "react-router-dom";
import AddPost from "./AddPost";

const Main = () => {
  const { posts } = useContext(DataContext);
  return (
    <div>
      <AddPost />
      {posts.map((post) => (
        <div key={post.id} className="posts">
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Main;
