import PostCard from "./Card";
import { Container } from "react-bootstrap";
import { fetchPostByID } from "../api/posts";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import ErrorPage from "./Error";
export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log(id);
    fetchPostByID(id)
      .then(({ data }) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
        setPost(null);
      });
  }, [id]);
  return (
    <>
      <Container className="emp-profile">
        {!post && <div></div>}
        {post ? (
          <PostCard key={id} Title={post.title} Body={post.body} />
        ) : (
          <ErrorPage />
        )}
      </Container>
      <Footer />
    </>
  );
}
