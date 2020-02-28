import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import "../styles/View.scss";
import Counter from "../components/Counter";

import { BookContext } from '../contexts/Book';
import { CartContext } from "../contexts/Cart";

export default function() {
    return <Container className="mt-4">
        <BookContext.Consumer>
            {({ myBook }) => (
                <Row>
                    <Col md="4">
                        <img width="90%" src={myBook.src} alt="LN image src" />
                    </Col>
                    <Col md="7">
                        <div className="bookname mb-1">{myBook.name}</div>
                        <div>Author: {myBook.author}</div>
                        <div>Price: ${myBook.price}</div>
                        <div>
                            <div className="w-25"><Counter /></div>
                            <CartContext.Consumer>
                                {({ addToCart }) => (
                                    <Button onClick={() => addToCart(myBook)}>
                                        Add to cart
                                    </Button>
                                )}
                            </CartContext.Consumer>
                        </div>
                        <hr></hr>
                        <div>Introduction: {myBook.description}</div>
                    </Col>
                </Row>
            )}
        </BookContext.Consumer>
    </Container>
}