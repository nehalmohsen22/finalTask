import React from "react";
import Card from "react-bootstrap/Card";

function PostCard(props) {
  let { Title, Body } = this.props;
  return (
    <Card
      className="col-3"
      style={{
        color: "#f72585",
        margin: "30px",
        boxSizing: "content-box",
      }}
    >
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Body}$</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
