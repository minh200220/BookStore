import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row
} from "reactstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Header from "../components/Header";

const books = [
  {
    name: "Kono Subarashii Sekai Ni Shukufuku o! Vol 2",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/11/2014E5B9B412E69C8823E697A500E6998227E5888640E7A7920001-720x1024.jpg",
    price: "$55"
  },
  {
    name: "Kono Subarashii Sekai Ni Shukufuku o! Vol 1",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/11/Damegami_cover_1.jpg",
    price: "$55"
  },
  {
    name: "Kono Subarashii Sekai Ni Shukufuku o! Vol 3",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/11/IMG_0001-721x1024.png",
    price: "$55"
  },
  {
    name: "Kono Subarashii Sekai Ni Shukufuku o! Vol 4",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/11/qGFUgrX-722x1024.jpg",
    price: "$55"
  },
  {
    name: "Kono Subarashii Sekai Ni Shukufuku o! Vol 5",
    src:
      "http://valvrareteam.com/wp-content/uploads/2015/11/coverImage_1030061.jpg",
    price: "$55"
  }
];

const Home = props => {
  return (
    <div>
      <Container>
        <Header title="New light novels" />
        <Row>
          <CardDeck>
            {books.map(book => (
              <Card>
                <CardImg top width="100%" src={book.src} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{book.name}</CardTitle>
                  <CardSubtitle>{book.price}</CardSubtitle>
                  <Button>
                    <AddShoppingCartIcon />
                  </Button>
                </CardBody>
              </Card>
            ))}
          </CardDeck>
        </Row>
      </Container>
      <Container>
        <Header title="Bestsellers" />
        <Row>
          <CardDeck>
            {books.map(book => (
              <Card>
                <CardImg top width="100%" src={book.src} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{book.name}</CardTitle>
                  <CardSubtitle>{book.price}</CardSubtitle>
                  <Button>
                    <AddShoppingCartIcon />
                  </Button>
                </CardBody>
              </Card>
            ))}
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
