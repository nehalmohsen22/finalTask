import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../api/posts";
import Footer from "./Footer";

import "./home.css";
export default function Home() {
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
    <>
      <div className="col-10 text-center mx-auto">
        <Table responsive>
          <thead style={{ backgroundColor: "#343a40", color: "white" }}>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => {
              return (
                <>
                  <tr>
                    <td
                      style={{ backgroundColor: "#fffffc", color: "#343a40" }}
                    >
                      {post.id}
                    </td>
                    <td
                      style={{ backgroundColor: "#fffffc", color: "#343a40" }}
                    >
                      {post.title}
                    </td>
                    <td
                      style={{ backgroundColor: "#fffffc", color: "#343a40" }}
                    >
                      <div>
                        <button
                          style={{
                            margin: "5px",
                            boxSizing: "content-box",
                            width: "50px",
                            borderRadius: "5px",
                            backgroundColor: "#a2d2ff",
                            border: "none",
                          }}
                        >
                          {" "}
                          <Link
                            style={{ color: "#F7F5F2", textDecoration: "none" }}
                            to={`/post/${post.id}`}
                          >
                            View
                          </Link>
                        </button>
                        <button
                          style={{
                            color: "white",
                            margin: "5px",
                            boxSizing: "content-box",
                            width: "50px",
                            borderRadius: "5px",
                            backgroundColor: "#ffc8dd",
                            border: "none",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          style={{
                            color: "white",
                            margin: "5px",
                            boxSizing: "content-box",
                            width: "50px",
                            borderRadius: "5px",
                            backgroundColor: "#cdb4db",
                            border: "none",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}
