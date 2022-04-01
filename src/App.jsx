import React from "react";
import Header from "./componants/Navbar";
import Home from "./componants/Home";
import Error from "./componants/Error";
import Profile from "./componants/Profile";
import Posts from "./componants/Posts";
import Post from "./componants/Post";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Header />

      <main className="mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />}>
            <Route path=":id" element={<Post />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
