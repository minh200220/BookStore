import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/MyCart.scss";
import { CartContext } from "../contexts/Cart";

export default function() {
  return (
    <div>
      <Container className="mt-2">
        <Row>
          <Col md="6" className=" mt-3">
            <CartContext.Consumer>
              {({ cartItems }) => (
                <div>
                  {cartItems.map(item => (
                    <div className="d-flex border">
                      <img src={item.src} className="lnimg" alt="light novel" />
                      <div className="text">
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <CartContext.Consumer>
                          {({ removeFromCart }) => (
                            <Button 
                              onClick={() => removeFromCart(item)}
                              color="primary"
                            >  
                              Remove from cart
                            </Button>
                          )}
                        </CartContext.Consumer>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CartContext.Consumer>
          </Col>
          <Col md="5" className="mt-3">
            <div className="border mb-3">
              <div className="border-bottom">Total : $199</div>
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
