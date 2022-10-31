import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {
  title: string;
  author: string;
  isbn: string;
  distance: string;
  returnDate: string;
};

const ListingCard = (props: Props) => {
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>Author: {props.author}</Card.Text>
        <Card.Text>ISBN: {props.isbn}</Card.Text>
        <Card.Text>Distance: {props.distance} miles</Card.Text>
        <Card.Text>Return Date: {props.returnDate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ListingCard;
