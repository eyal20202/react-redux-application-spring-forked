import React from "react";
import { Card, ListGroup } from "react-bootstrap";
// import  from "react-bootstrap/ListGroup";

function CardAnimal({ animal }) {
  if (!animal) return;
  // console.log("myanimal:", animal);
  const { gender, name, age } = animal;
  const image = animal.primary_photo_cropped && animal.primary_photo_cropped.medium;
  const primary = animal && animal.breeds && animal.breeds.primary;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title> Primary: {primary}</Card.Title>
        <Card.Text>name: {name}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Age : {age}</ListGroup.Item>
        <ListGroup.Item>Gender: {gender}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardAnimal;
