import React from "react";
import { Row, Col } from "reactstrap";
import "../styles/Footer.css";
import payment from "../images/payment.JPG";

export default function() {
  return (
    <div className="Footer">
      {/* <Container className="text-white bg-dark"> */}
      <Row className="text-white bg-dark mt-4 pt-4 pb-4 pl-5">
        <Col sm="6" md="2" className="mb-3">
          <h5>Explore</h5>
          <div>
            <a href="/404">About us</a>
          </div>
          <div>
            <a href="/404">Sitemap</a>
          </div>
          <div>
            <a href="/404">Bookmarks</a>
          </div>
          <div>
            <a href="/404">Signin</a>
          </div>
        </Col>
        <Col sm="6" md="2" className="mb-3">
          <h5>How can we help</h5>
          <div>
            <a href="/404">Help</a>
          </div>
          <div>
            <a href="/404">Contact us</a>
          </div>
          <div>
            <a href="/404">Where's my stuff?</a>
          </div>
          <div>
            <a href="/404">Where do you deliver?</a>
          </div>
        </Col>
        <Col sm="6" md="2" className="mb-3">
          <h5>Join us</h5>
          <div>
            <a href="/404">Affiliates</a>
          </div>
          <div>
            <a href="/404">Jobs</a>
          </div>
        </Col>
        <Col sm="6" md="2" className="mb-3">
          <h5>Importain stuff</h5>
          <div>
            <a href="/404">Cookie</a>
          </div>
          <div>
            <a href="/404">Privacy policy</a>
          </div>
          <div>
            <a href="/404">Terms & Conditions</a>
          </div>
          <div>
            <a href="/404">Secure shopping</a>
          </div>
          <div>
            <a href="/404">Accessibility</a>
          </div>
        </Col>
        <Col md="3" className="mb-3 justify-content-center">
          <div>We accept these payment methods</div>
          <img src={payment} width="300" alt="payment methods" />
          <div>© 2020 The Light novels Ltd.US.</div>
          <div>Registered company number: 20022000</div>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}
