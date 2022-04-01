import React from "react";
function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer
      className="text-muted py-5"
      style={{
        backgroundColor: "#343a40",
        marginTop: "20px",
        width: "100%",
      }}
    >
      <p style={{ textAlign: "center" }}>
        <span>Copyright &copy; {`${date}`}</span>
      </p>
    </footer>
  );
}
export default Footer;
