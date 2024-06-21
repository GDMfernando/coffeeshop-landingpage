import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  Button,
} from "react-bootstrap";

function Topnav() {
  return (
    <div>
      <>
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className=" mb-3 navbar-section"
          >
            <Container fluid>
              <Navbar.Brand href="#">
                {" "}
                <img
                  src="/images/zero-coffee-logo.png"
                  alt="Logo"
                  style={{ maxHeight: "50px" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 topBar-nav">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <Nav.Link href="#action2">Products</Nav.Link>
                    <Nav.Link href="#action2">Blog</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                  </Nav>
                 
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1"><i class="bi bi-search"></i></Nav.Link>
                    <Nav.Link href="#action2"><i class="bi bi-cart"></i></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </div>
  );
}

export default Topnav;
