import React from "react";
import {Image, Row, Col } from "react-bootstrap";

function Benifits() {
  return (
    <Row className="benifits-section align-items-center">
      <Col xs={12} md={6} className="justify-content-start text-start">
      <h2 className="sub-headings  sub-heading-products">
      Why Choose Coffee Zero?
        </h2>
        <p className="benifits-p">Coffee Zero is an exceptional choice for anyone looking to integrate healthier habits into their daily routine. Our coffee is low in calories and rich in antioxidants, making it ideal for weight loss and promoting overall wellness. We use only premium ingredients to ensure a delicious and satisfying coffee experience. Join the Coffee Zero movement and enjoy a guilt-free coffee experience.</p>
      </Col>
      <Col xs={12} md={6}><Image src="images/img-2.png" className="img-fluid"></Image></Col>
    </Row>

  );
}

export default Benifits;