import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Button from "./components/Button";
import Results from "./components/Results";

const Search = () => {
  return (
    <div className="page">
      <Header />
      <div className="searchBox">
        <Row>
          <Col>
            <h3 style={{ textAlign: "center" }}>Search</h3>
            <SearchForm />
            <Button color={"#FB8500"} text={"Search"} />
          </Col>
          <Col>
            <h3 style={{ textAlign: "center" }}>Results</h3>
            <Results />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Search;
