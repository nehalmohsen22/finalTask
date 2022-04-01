import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api/posts";
import PostCard from "./Card";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetchAllPosts()
      .then(({ data }) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        setPosts([]);
      });
  }, [setPosts]);
  return (
    <div className=" text-center row ">
      <div style={{ color: "#f72585" }}>
        <h1>Posts</h1>
      </div>
      <br />
      {posts.map((post, index) => {
        return <PostCard key={index} Title={post.title} Body={post.body} />;
      })}
    </div>
  );
}
