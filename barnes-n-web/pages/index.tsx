import type { NextPage } from "next";
import ExampleComponent from "./components/ExampleComponent";
import Container from "react-bootstrap/Container";

const Home: NextPage = () => {
  return (
    <Container className="p-3">
      <ExampleComponent>
        <h1>HelloWorld</h1>
      </ExampleComponent>
    </Container>
  );
};

export default Home;
