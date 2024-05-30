import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Header from "./Header";
import AddPost from "./AddPost";
import Main from "./Main";
import { DataContextProvider } from "./context/dataContextProvider";
import PostPage from "./PostPage";
import EditPost from "./EditPost";

function App() {
  return (
    <Router>
      <DataContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/add-post" element={<AddPost />} />
          <Route exact path="/post/:id" element={<PostPage />} />
        </Routes>
      </DataContextProvider>
    </Router>
  );
}

export default App;
