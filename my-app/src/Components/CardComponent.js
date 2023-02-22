import React from "react";
import Card from "react-bootstrap/Card";
import "../css/card.css";

function CardComponent({ url, title, name, image, author, description, date }) {
  return (
    <div className="cardİtem">
      <Card className=" mt-1" style={{ width: "18rem" }}>
        <a href={url}>
          <Card.Img variant="top" src={image} />
        </a>
        <Card.Body>
          <Card.Title>
            <p>{title}</p>
          </Card.Title>
          <Card.Text>
            <p>{description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <span className="cardFooter">
            <a href="author">{author}</a>
            {" in "}
            <a href="sourceName">{name}</a>
          </span>
          <br />
          <span className="cardSpan">
            <a href="author">{date}</a>
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardComponent;
