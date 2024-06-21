import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Card className="text-center footer-card">
        <Card.Header>
          <img
            src="/images/zero-logo-white.png"
            alt="Logo"
            style={{ maxHeight: "50px" }}
          />
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Privacy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Terms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Text>
          <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home"><i class="bi bi-facebook"></i></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1"><i class="bi bi-linkedin"></i></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"><i class="bi bi-instagram"></i></Nav.Link>
              </Nav.Item>
            </Nav>
        </Card.Body>
        <Card.Footer>
          © 2023 Zero Coffee Shop. All rights reserved.
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
