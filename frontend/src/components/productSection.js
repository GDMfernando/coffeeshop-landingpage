import React from "react";
import ProductCard from "./productCard";
import { Row, Col } from "react-bootstrap";


const productData = [
    {
      title: "Coffee Zero Classic Blend",
      description: "Enjoy the rich and smooth taste of Coffee Zero Classic Blend.",
      image: "images/productimage.png",
      price: "12.99"
    },
    {
      title: "Coffee Zero Dark Roast",
      description: "Indulge in the bold and robust flavor of Coffee Zero Dark Roast.",
      image: "images/productimage.png",
        price: "14.99"
    },
    {
      title: "Coffee Zero Vanilla Delight",
      description: "Savor the creamy and aromatic taste of Coffee Zero Vanilla Delight.",
      image: "images/productimage.png",
        price: "13.99"
    },
    {
      title: "Coffee Zero Mocha Bliss",
      description: "This luxurious blend is both satisfying and waistline-friendly.",
      image: "images/productimage.png",
        price: "15.99"
    },
    {
        title: "Coffee Zero Classic Blend",
        description: "Enjoy the rich and smooth taste of Coffee Zero Classic Blend.",
        image: "images/productimage.png",
        price: "12.99"
      },
      {
        title: "Coffee Zero Dark Roast",
        description: "Indulge in the bold and robust flavor of Coffee Zero Dark Roast.",
        image: "images/productimage.png",
          price: "14.99"
      },
      {
        title: "Coffee Zero Vanilla Delight",
        description: "Savor the creamy and aromatic taste of Coffee Zero Vanilla Delight.",
        image: "images/productimage.png",
          price: "13.99"
      },
      {
        title: "Coffee Zero Mocha Bliss",
        description: "This luxurious blend is both satisfying and waistline-friendly.",
        image: "images/productimage.png",
          price: "15.99"
      },
  ];

function ProductSection() {
  return (
    <div className="product-section">
        <h2 className="sub-headings  sub-heading-products">
        Our Products
        </h2>
      <Row xs={2} md={2} lg={4} className="g-4">
         {productData.map((product, idx) => (
          <Col key={idx}>
            <ProductCard
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductSection;
