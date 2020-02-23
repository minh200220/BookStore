import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { CartContext } from "../contexts/Cart";

export default function() {
  return (
    <CartContext.Consumer>
      {({ cartItems }) => (
        <Container>
          <Row>
            {cartItems.map(item => (
              <Col sm="3">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={item.src}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.price}</CardText>
                    <CartContext.Consumer>
                      {({ removeFromCart }) => (
                        <Button onClick={() => removeFromCart(item)}>
                          Remove from cart
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </CartContext.Consumer>
  );
}
