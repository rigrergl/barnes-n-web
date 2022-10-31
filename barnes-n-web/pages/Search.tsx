import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import FilterForm from "./components/FilterForm";
import Button from "./components/Button";

const Search = () => {
  const [listings, setListings] = useState([]);

  return (
    <div className="page">
      <Header />
      <Container fluid>
        <Row style={{ backgroundColor: "#e5e5e5" }}>
          <Col sm={1}></Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Search</h3>
            <SearchForm />
          </Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Results</h3>
            <Row style={{ backgroundColor: "#696969" }}>
              <FilterForm />
            </Row>
            <Row style={{ backgroundColor: "#C5C5C5" }}></Row>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
