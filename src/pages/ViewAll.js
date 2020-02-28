import React, { useState, useEffect, useContext } from "react";
import { Card, CardImg,
  CardTitle, CardSubtitle, CardBody,
  Container, Row, Col } from "reactstrap";
import axios from 'axios';
import "../styles/Home.scss";

import Header from "../components/Header";
import { BookContext } from '../contexts/Book';

export default function() {
  const [books, setBooks] = useState([]);
  const { viewBook } = useContext(BookContext);

  const deleteBook = (book) => {
    axios.delete(`http://localhost:5000/product/${book._id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
  }

  useEffect(() => {
    axios.get("http://localhost:5000/product/all").then(res => {
      setBooks(res.data.product);
    });
  }, []);

  return (
    <div>
      <Container>
        <Header title="All light novels" />
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
                  <CardSubtitle>{book.author}</CardSubtitle>
                  <CardSubtitle>{book.price}</CardSubtitle>
                  <CardSubtitle className="mt-1">
                    <a href="/update" 
                      className="btn btn-primary mr-1" 
                      role="button"
                      onClick={() => viewBook(book)}>
                      Update
                    </a>
                    <a href="/viewall" 
                      className="btn btn-danger mr-1" 
                      role="button"
                      onClick={() => deleteBook(book)}>
                      Delete
                    </a>
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
