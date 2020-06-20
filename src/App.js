import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ExceptionAlert from "./ExceptionMessage/ExceptionAlert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const lefrRightArrows = (
  <svg
    class="bi bi-arrow-left-right fa-3x"
    width="2em"
    height="2em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M10.146 7.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 11l-2.647-2.646a.5.5 0 0 1 0-.708z"
    />
    <path
      fill-rule="evenodd"
      d="M2 11a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 11zm3.854-9.354a.5.5 0 0 1 0 .708L3.207 5l2.647 2.646a.5.5 0 1 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
    />
    <path
      fill-rule="evenodd"
      d="M2.5 5a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    />
  </svg>
);

const circularArrows = (
  <svg
    class="bi bi-arrow-repeat"
    width="2em"
    height="2em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
    />
    <path
      fill-rule="evenodd"
      d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
    />
  </svg>
);

const trash = (
  <svg
    class="bi bi-trash"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
    <path
      fill-rule="evenodd"
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    />
  </svg>
);

export default function App() {
  let exceptionObject = {
    message: "Account not found",
    trace:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta, arcu in ultricies tristique, libero dui efficitur lectus, vel gravida risus libero sed massa. Sed hendrerit lobortis varius. Cras nec porta urna. Aliquam varius nisl non tincidunt lacinia. Vestibulum tincidunt feugiat eros. Maecenas tristique finibus magna, ac facilisis metus semper vitae. Sed urna elit, pharetra a ipsum elementum, mollis tempus nisi. Quisque a dolor eu orci lobortis maximus. Aliquam consequat erat porta, finibus elit et, pellentesque lectus. In interdum congue odio. Vestibulum nec condimentum diam. Phasellus et est ac tellus lobortis pretium vel vitae magna.",
    hidden: false,
    expanded: false
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container fluid className="ml-4 mr-4">
          <Navbar.Brand href="#home" className="mr-5">
            Daily Activity
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#swap">{lefrRightArrows}</Nav.Link>
            <Nav.Link href="#update">{circularArrows}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ExceptionAlert exceptionObj={exceptionObject} />
      <Container fluid className="ml-4 mr-4">
        <h1 className="mt-4">Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Button className="mb-4 mt-1">asdf</Button>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">
                  Task name
                  <Button variant="outline-danger" className="float-right">
                    {trash}
                  </Button>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Task description. If exists
                </Card.Subtitle>
                <Button variant="outline-success" block>
                  Complete
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>qwer</Col>
          <Col>zxcvz</Col>
        </Row>
      </Container>
    </div>
  );
}
