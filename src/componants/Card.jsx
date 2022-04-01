import React from "react";
import Card from "react-bootstrap/Card";
import image from "../images/slide3.jpg";

function PostCard(props) {
  let { Title, Body } = props;
  return (
    <Card
      className="col-3"
      style={{
        margin: "auto ",
        marginBottom: "15px",
        boxSizing: "content-box",
      }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title
          style={{
            color: "#343a40",
          }}
        >
          {Title}
        </Card.Title>
        <Card.Text
          style={{
            color: "#e7bc91",
          }}
        >
          {Body}$
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
