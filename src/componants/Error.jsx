import React from "react";
import error from "../images/error.jpg";
import Footer from "./Footer";

function ErrorPage() {
  return (
    <>
      <img
        src={error}
        alt="error img "
        style={{ width: "100%", height: "130vh" }}
      />
      <Footer />
    </>
  );
}
export default ErrorPage;
