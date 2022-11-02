import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "./components/Header";
import getConfig from "next/config";
import ResultsList from "./components/ResultsList";
import type { Listing } from "./components/Result";

const Search = () => {
  const [listings, setListings] = useState<Listing[]>();
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn_13, setIsbn_13] = useState("");
  const [isbn_10, setIsbn_10] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
  const { publicRuntimeConfig } = getConfig();
  const backendUrl = publicRuntimeConfig.backendUrl;

  const submitSearchForm = () => {
    fetch(backendUrl + "/listings/searchListings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookTitle: title,
        isbn_10: isbn_10,
        isbn_13: isbn_13,
        author: author,
        latitude: latitude,
        longitude: longitude,
        maxDistanceInMiles: maxDistance,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setListings(result);
        console.log(listings);
      });
  };

  return (
    <div className="page">
      <Header />
      <Container fluid="sm" className="searchBox">
        <Row style={{ backgroundColor: "#e5e5e5" }}>
          <Col sm={1}></Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Search</h3>
            <Form>
              <Form.Label>Location</Form.Label>
              <Row>
                <Form.Group as={Col} controlId="formGridLongitude">
                  <Form.Control
                    style={{ width: "18vw" }}
                    type="longitude"
                    placeholder="Longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLatitude">
                  <Form.Control
                    style={{ width: "18vw" }}
                    type="latitude"
                    placeholder="Latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group as={Col} controlId="formGridDistance">
                <Form.Control
                  style={{ width: "18vw" }}
                  type="maxDistance"
                  placeholder="Distance"
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridSearchCriteria">
                <Form.Label>Search Criteria</Form.Label>
                <Form.Control
                  style={{ width: "31vw" }}
                  type="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridAuthor">
                <Form.Control
                  style={{ width: "25vw" }}
                  type="author"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridIsbn13">
                <Form.Control
                  style={{ width: "15vw" }}
                  type="isbn_13"
                  placeholder="ISBN 13"
                  value={isbn_13}
                  onChange={(e) => setIsbn_13(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridIsbn10">
                <Form.Control
                  style={{ width: "15vw" }}
                  type="isbn_10"
                  placeholder="ISBN 10"
                  value={isbn_10}
                  onChange={(e) => setIsbn_10(e.target.value)}
                />
              </Form.Group>
              <Button color={"#FB8500"} onClick={submitSearchForm}>
                Search
              </Button>
            </Form>
          </Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Results</h3>
            <Row style={{ backgroundColor: "#C5C5C5" }}>
              <ResultsList results={listings} />
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
