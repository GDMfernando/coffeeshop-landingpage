import React from "react";
import Topnav from "./topNav";
import {Button } from "react-bootstrap";
import Benifits from "./benifitsSection";

function Header() {
  return (
    <div className="header-section">
      <Topnav></Topnav>
      <div className="hero">
      <h1 className="hero-title">Enjoy Coffee Without Compromise</h1>
      <h2 className="hero-subheading">The perfect coffee for a healthier lifestyle</h2>
      <Button className="hero-btn">
        Shop Now
      </Button>
      </div>
      <Benifits/>
    </div>
  );
}

export default Header;