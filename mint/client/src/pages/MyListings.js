import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Naviagation from "../components/Navbar";

const MyListing = () => {
  return (
    <Container
      fluid
      style={{ background: "rgb(248, 247, 245)" }}
      className="-center"
    >
      <Row
        className=" justify-content-center"
        style={{
          color: "rgb(128, 209, 128)",
          fontSize: "50px",
          fontFamily: "fantasy",
        }}
      >
        My Listings
      </Row>

      <Row className="justify-content-center">
        <Card
          className="m-3 pt-3"
          style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
        >
          <Card.Img
            className="m-2 align-items-center"
            variant="top"
            src="holder.js/100px180"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button
              shadow="none"
              size=""
              className=""
              style={{ background: "rgb(128, 209, 128)" }}
            >
              See Antiques
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="m-3 pt-3"
          style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
        >
          <Card.Img
            className="m-2 align-items-center"
            variant="top"
            src="holder.js/100px180"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button
              shadow="none"
              size=""
              className=""
              style={{ background: "rgb(128, 209, 128)" }}
            >
              See Antiques
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="m-3 pt-3"
          style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
        >
          <Card.Img
            className="m-2 align-items-center"
            variant="top"
            src="holder.js/100px180"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button
              shadow="none"
              size=""
              className=""
              style={{ background: "rgb(128, 209, 128)" }}
            >
              See Antiques
            </Button>
          </Card.Body>
        </Card>
      </Row>

      <Row className="justify-content-center">
        <Card
          className="m-3 pt-3"
          style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
        >
          <Card.Img
            className="m-2 align-items-center"
            variant="top"
            src="holder.js/100px180"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button
              shadow="none"
              size=""
              className=""
              style={{ background: "rgb(128, 209, 128)" }}
            >
              See Antiques
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="m-3 pt-3"
          style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
        >
          <Card.Img
            className="m-2 align-items-center"
            variant="top"
            src="holder.js/100px180"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button
              shadow="none"
              size=""
              className=""
              style={{ background: "rgb(128, 209, 128)" }}
            >
              See Antiques
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="m-3 pt-3"
          style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
        >
          <Card.Img
            className="m-2 align-items-center"
            variant="top"
            src="holder.js/100px180"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button
              shadow="none"
              size=""
              className=""
              style={{ background: "rgb(128, 209, 128)" }}
            >
              See Antiques
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default MyListing;
