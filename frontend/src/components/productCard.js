import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function ProductCard({ title, description, image, price }) {
  return (
    <div>
      <Card className="product-card">
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="product-discrption">
          {description}
          </Card.Text>
          <Row className="mt-3 mb-3">
            <Col xs={10} md={6}>
        
              <InputGroup className="mb-md-0 mb-sm-2 product-qty">
                <Button variant="outline-secondary" className="px-2">
                  <i class="bi bi-dash"></i>
                </Button>
                <FormControl type="text" value={"0"}/>
                <Button variant="outline-secondary" className="px-2">
                  <i class="bi bi-plus"></i>
                </Button>
              </InputGroup>
            </Col>
            <Col className="productPrice d-flex justify-content-md-end" xs={12} md={6}>$ 
              {price}
            </Col>
          </Row>
          <Row>
            <Col>
            <Button variant="outline-success productCard-btn w-100">Buy Now</Button>{" "}</Col>

          </Row>
       
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
