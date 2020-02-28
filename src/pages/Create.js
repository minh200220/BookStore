import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

export default function() {
    const [book, setBook] = useState({ name: "", author: "", price: "", description: "", categories: "", src: "" })

    const handleSubmit = () => {
        axios.post('http://localhost:5000/product/create', book)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            }) 
    }

    return (
        <Container className="mt-4">
        <Row>
            <Col md="6">
            <Form>
                <FormGroup>
                    <Label for="name">Light novel name</Label>
                    <Input
                        type="text"
                        name="lnname"
                        id="name"
                        placeholder="Sword Art Online vol 21"
                        onChange = {event => setBook({ ...book, name: event.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                        type="text"
                        name="lnauthor"
                        id="author"
                        placeholder="Reki Kawahara"
                        onChange = {event => setBook({ ...book, author: event.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price ($)</Label>
                    <Input
                        type="text"
                        name="lnprice"
                        id="price"
                        placeholder="22.00"
                        onChange = {event => setBook({ ...book, price: event.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="lndescription"
                        id="description"
                        placeholder="The symphony of swords and light"
                        onChange = {event => setBook({ ...book, description: event.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="categories">Categories</Label>
                    <Input
                        type="textarea"
                        name="lncategories"
                        id="categories"
                        placeholder="Magic, Harem, Isekai, Adventure"
                        onChange = {event => setBook({ ...book, categories: event.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="src">Image src</Label>
                    <Input
                        type="tex"
                        name="lnsrc"
                        id="src"
                        placeholder="http..."
                        onChange = {event => setBook({ ...book, src: event.target.value })}
                    />
                </FormGroup>
                {/* <FormGroup>
                    <Label for="image">Image</Label>
                    <Input type="file" name="lnimage" id="image" />
                </FormGroup> */}

                <a href="/viewall" className="btn btn-primary" onClick={() => handleSubmit()}>
                    Create
                </a>
            </Form>
            </Col>
            <Col md="6" className="mt-2">
                <img
                    width="400px"
                    className="d-none d-md-block"
                    src="https://vignette.wikia.nocookie.net/swordartonline/images/e/e9/Sword_Art_Online_Volume_21.png/revision/latest?cb=20181206154357"
                    alt="SAO vol 21"
                />
            </Col>
        </Row>
        </Container>
    );
}
