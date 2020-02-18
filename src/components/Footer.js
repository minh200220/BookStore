import React from "react";
import { Row, Col } from "reactstrap";
import "../styles/Footer.css";

export default function() {
  return (
    <div className="Footer">
      <Row className="text-white bg-dark mt-4 pt-4 pb-4 pl-4">
        <Col sm="3">
          <h5>Explore</h5>
          <div>
            <a href="google.com.vn">About us</a>
          </div>
          <div>
            <a href="google.com.vn">Sitemap</a>
          </div>
          <div>
            <a href="google.com.vn">Bookmarks</a>
          </div>
          <div>
            <a href="google.com.vn">Signin</a>
          </div>
        </Col>
        <Col sm="3">
          <h5>How can we help</h5>
          <div>
            <a href="google.com.vn">Help</a>
          </div>
          <div>
            <a href="google.com.vn">Contact us</a>
          </div>
          <div>
            <a href="google.com.vn">Where's my stuff?</a>
          </div>
          <div>
            <a href="google.com.vn">Where do you deliver?</a>
          </div>
        </Col>
        <Col sm="3">
          <h5>Join us</h5>
          <div>
            <a href="google.com.vn">Affiliates</a>
          </div>
          <div>
            <a href="google.com.vn">Jobs</a>
          </div>
        </Col>
        <Col sm="3">
          <h5>Importain stuff</h5>
          <div>
            <a href="google.com.vn">Cookie</a>
          </div>
          <div>
            <a href="google.com.vn">Privacy policy</a>
          </div>
          <div>
            <a href="google.com.vn">Terms & Conditions</a>
          </div>
          <div>
            <a href="google.com.vn">Secure shopping</a>
          </div>
          <div>
            <a href="google.com.vn">Accessibility</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
