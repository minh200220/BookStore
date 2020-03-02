import React, { useContext } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/MyCart.scss";
import { CartContext } from "../contexts/Cart";

export default function() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems.reduce((a, b) => a + parseFloat(b.price), 0 );
  return (
    <div>
      <Container className="mt-2">
        <Row>
          <Col md="6" className=" mt-3">
            {cartItems.map(item => (
              <div className="d-flex border">
                <img src={item.src} className="lnimg" alt="light novel" />
                <div className="text">
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                  <Button color="primary"
                    onClick={() => removeFromCart(item)} >  
                    Remove from cart
                  </Button>
                </div>
              </div>
            ))}
          </Col>
          <Col md="5" className="mt-3">
            <div className="border mb-3">
            <div className="border-bottom">Total : ${total}</div>
              <div>Ship fee: $1</div>
            </div>
            <a href="/checkout" className="btn btn-danger w-100" role="button">
              Order
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
