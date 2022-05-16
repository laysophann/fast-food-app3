import React from "react";
import {Card, Button,Badge} from 'react-bootstrap';

function Item() {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
         Price
        </Card.Text>
        <Badge bg="warning" text="dark">0</Badge>
        <Button variant="primary" className="mx-2">Add</Button>
        <Button variant="danger">Delete</Button>
        <h4 className="my-2">Total:</h4>
      </Card.Body>
    </Card>
  );
}

export default Item;
