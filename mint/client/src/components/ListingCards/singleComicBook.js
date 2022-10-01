import React from "react"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleAntique({ comicbook }) {
  console.log(comicbook);
  return (
    <div>
      <Container
        fluid
        style={{ background: "rgb(204, 221, 224)" }}
        className="text-center"
      >
        <Row className="justify-content-center">
          <Card
            className="m-3 pt-3 align-items-center"
            style={{ width: "18rem", background: "rgb(248, 247, 245)" }}
          >
            <Card.Img
              className="m-2"
              variant="top"
              src={comicbook.image}
              style={{ width: 250, height: 150 }}
            />
            {/* {Antiques && Antiques.map((title, image, price, description) => ( */}
            <Card.Body>
              <Card.Title> {comicbook.title} </Card.Title>
              <Card.Text>{comicbook.price}</Card.Text>
              <Card.Text>{comicbook.description}</Card.Text>
              <Button className="" style={{ background: "rgb(204, 221, 224)" }}>
                Add to Cart
              </Button>
             
            </Card.Body>
            {/* ))}; */}
          </Card>
        </Row>
      </Container>
    </div>
  )
  
}

export default SingleAntique