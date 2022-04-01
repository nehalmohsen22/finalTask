import "./App.css";
import React from "react";
import Header from "./componants/Navbar";
import Footer from "./componants/Footer";
import Home from "./componants/Home";
import Error from "./componants/Error";
import Profile from "./componants/Profile";
import Posts from "./componants/Posts";
import Post from "./componants/Post";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  let posts = [
    { Title: "product1", price: "40" },
    { Title: "product2", price: "30" },
    { Title: "product3", price: "50" },
    { Title: "product4", price: "40" },
    { Title: "product5", price: "560" },
    { Title: "product6", price: "450" },
  ];

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

      <Footer></Footer>
    </>
  );
}

export default App;
