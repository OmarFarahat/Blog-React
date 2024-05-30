import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./context/dataContextProvider";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
const PostPage = () => {
  const { id } = useParams();
  const { posts } = useContext(DataContext);
  console.log(posts);
  console.log(id);
  return (
    <>
      {posts.map((post) => {
        if (post.id == id) {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        }
      })}
      <EditPost />
      <DeletePost />
    </>
  );
};

export default PostPage;
