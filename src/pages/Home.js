import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Header from "../components/Header";
import Counter from "../components/Counter";
import { CartContext } from "../contexts/Cart";
import "../styles/Home.css";

const books = [
  {
    name: "Genjitsushugi Yuusha no Oukokusaikenki Vol 1",
    src:
      "http://valvrareteam.com/wp-content/uploads/2016/07/fffe5000a8880033c912f8bd91894519-1-727x1024.jpg",
    price: "$70"
  },
  {
    name: "Kono Subarashii Sekai Ni Shukufuku o! Vol 1",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/11/Damegami_cover_1.jpg",
    price: "$55"
  },
  {
    name: "Accel World Vol 9",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/09/coverImage_1737510-716x1024.jpg",
    price: "$71"
  },
  {
    name: "No game no life Vol 2",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/09/NGNL_V2_Cover_Page-730x1024.jpg",
    price: "$60"
  },
  {
    name: "No game no life Vol 2",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/09/NGNL_V2_Cover_Page-730x1024.jpg",
    price: "$60"
  },
  {
    name: "Tate no Yuusha no Nariagari Vol 5",
    src: "http://valvrareteam.com/wp-content/uploads/2015/09/Cover_5.jpg",
    price: "$63"
  }
];

const Home = props => {
  return (
    <div>
      <Container>
        <Header title="New light novels" />
        <Row className="justify-content-center">
          {books.map(book => (
            <Col xs="6" sm="4" md="3">
              <Card>
                <CardImg top width="100%" src={book.src} alt="Card image cap" />
                <CardBody>
                  <CardTitle>
                    <div className="name text-center">{book.name}</div>
                  </CardTitle>
                  <CardSubtitle className="text-center">{book.price}</CardSubtitle>
                  <CardSubtitle className="text-center">
                    <Counter />
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button onClick={() => addToCart(book)}>
                          <AddShoppingCartIcon />
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Header title="Bestsellers" />
        <Row className="justify-content-center">
          {books.map(book => (
            <Col xs="6" sm="4" md="3">
              <Card>
                <CardImg top width="100%" src={book.src} alt="Card image cap" />
                <CardBody>
                <CardTitle>
                    <div className="name text-center">{book.name}</div>
                  </CardTitle>
                  <CardSubtitle className="text-center">{book.price}</CardSubtitle>
                  <CardSubtitle className="text-center">
                    <Counter />
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button onClick={() => addToCart(book)}>
                          <AddShoppingCartIcon />
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
