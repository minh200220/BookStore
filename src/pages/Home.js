import React, { useState, useEffect, useContext } from "react";
import { Card, Button, CardImg,
  CardTitle, CardSubtitle, CardBody,
  Container, Row, Col } from "reactstrap";
import axios from 'axios';
import "../styles/Home.scss";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import Header from "../components/Header";
import Counter from "../components/Counter";
import { CartContext } from "../contexts/Cart";
import { BookContext } from '../contexts/Book';

export default function() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { viewBook } = useContext(BookContext);

  useEffect(() => {
    axios.get("http://localhost:5000/product/all").then(res => {
      setBooks(res.data.product);
    });
  }, []);

  return (
    <div>
      <Container>
        <Header title="New light novels" />
        <Row className="justify-content-center">
          {books.map(book => (
            <Col xs="6" sm="4" md="3">
              <Card>
                <CardImg top width="100%" src={book.src} alt="Card image cap" />
                <CardBody className="text-center">
                  <CardTitle>
                    <a href="/view" 
                      className="name text-center" 
                      onClick={() => viewBook(book)}>
                      {book.name}
                    </a>
                  </CardTitle>
                  <CardSubtitle>{book.price}</CardSubtitle>
                  <CardSubtitle>
                    <Counter />
                    <Button onClick={() => addToCart(book)}>
                      <AddShoppingCartIcon />
                    </Button>
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
                <CardBody className="text-center">
                  <CardTitle>
                    <a href="/view" 
                      className="name text-center" 
                      onClick={() => viewBook(book)}>
                      {book.name}
                    </a>
                  </CardTitle>
                  <CardSubtitle>{book.price}</CardSubtitle>
                  <CardSubtitle>
                    <Counter />
                    <Button onClick={() => addToCart(book)}>
                      <AddShoppingCartIcon />
                    </Button>
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
