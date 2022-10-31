import PropTypes from "prop-types";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "./Button";

function FilterForm() {
  return (
    <Form>
      <Form.Group as={Row} controlId="formDistance">
        <Form.Label column sm={4}>
          Filter By Distance
        </Form.Label>
        <Col sm={4}>
          <Form.Control type="distance" placeholder="miles" />
        </Col>
        <Col sm={4}>
          <Button color={"#FB8500"} text={"Filter"} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default FilterForm;
