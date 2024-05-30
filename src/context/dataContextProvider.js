import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const DataContext = createContext({});
const DataContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const postsData = [
    {
      id: 1,
      title: "Post 1",
      body: "This is post 1",
    },
    {
      id: 2,
      title: "Post 2",
      body: "This is post 2",
    },
    {
      id: 3,
      title: "Post 3",
      body: "This is post 3",
    },
    {
      id: 4,
      title: "Post 4",
      body: "This is post 4",
    },
    {
      id: 5,
      title: "Post 5",
      body: "This is post 5",
    },
  ];
  const [posts, setPosts] = useState(postsData);
  const [togglePost, setToglePost] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editTrigger, setEditTrigger] = useState(false);

  //   useEffect(() => {
  //     setPosts(postsData);
  //   }, []);

  const handleTogglePost = () => {
    setToglePost(!togglePost);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };
  const handleEditTrigger = (e) => {
    setEditTrigger(!editTrigger);
    console.log("edit");
  };
  const handleAddPost = (e) => {
    e.preventDefault();
    const id = postsData.length;
    const newPost = {
      id: id + 1,
      title: title,
      body: body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
    setToglePost(!togglePost);
  };

  const handleEditPost = (e, id) => {
    e.preventDefault();
    const updatedPost = {
      id: parseInt(id),
      title: title,
      body: body,
    };
    const newPosts = posts.map((post) => {
      return post.id == id ? updatedPost : post;
    });
    setPosts(newPosts);
    setTitle("");
    setBody("");
    navigate("/");
  };

  const handleDeletePost = (e, id) => {
    id = parseInt(id);
    setPosts(posts.filter((post) => post.id !== id));
    navigate("/");
  };

  return (
    <DataContext.Provider
      value={{
        togglePost,
        setToglePost,
        title,
        setTitle,
        body,
        setBody,
        handleTogglePost,
        handleTitle,
        handleBody,
        handleAddPost,
        posts,
        setPosts,
        handleBody,
        handleEditTrigger,
        editTrigger,
        handleEditPost,
        handleDeletePost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
