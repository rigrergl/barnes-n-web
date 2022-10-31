import PropTypes from "prop-types";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "./Button";

function SearchForm() {
  return (
    <Form>
      <Form.Label>Location</Form.Label>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control
            style={{ width: "25vw" }}
            type="city"
            placeholder="City"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZipCode">
          <Form.Control
            style={{ width: "7vw" }}
            type="zipcode"
            placeholder="Zip"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridSearchCriteria">
        <Form.Label>Search Criteria</Form.Label>
        <Form.Control style={{ width: "31vw" }} placeholder="Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAuthor">
        <Form.Control style={{ width: "25vw" }} placeholder="Author" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridIsbn13">
        <Form.Control style={{ width: "15vw" }} placeholder="ISBN 13" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridIsbn10">
        <Form.Control style={{ width: "15vw" }} placeholder="ISBN 10" />
      </Form.Group>
      <Button color={"#FB8500"} text={"Search"} />
    </Form>
  );
}

export default SearchForm;
