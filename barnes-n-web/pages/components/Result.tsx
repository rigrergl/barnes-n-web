import Card from "react-bootstrap/Card";

export type Listing = {
  listingId?: string;
  ownerId?: string;
  title?: string;
  locationId?: string;
  isbn_10?: string;
  isbn_13?: string;
  image?: string;
  author?: string;
  maxDueDate?: string;
  isRented?: string;
};

type Props = {
  title?: string;
  author?: string;
  isbn_10?: string;
  isbn_13?: string;
};

const Result = (props: Props) => {
  const selectListing = () => {};

  return (
    <Card onClick={selectListing}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>Author: {props.author}</Card.Text>
        <Card.Text>ISBN 10: {props.isbn_10}</Card.Text>
        <Card.Text>ISBN 13: {props.isbn_13}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Result;
