import type { NextPage } from "next";
import ExampleComponent from "./components/ExampleComponent";
import Container from "react-bootstrap/Container";
import React from 'react';
import TempPages from "./components/TempPages";
import Header from "./components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Container className="p-3">

        <TempPages />
        <ExampleComponent>
          <h1>HelloWorld</h1>
        </ExampleComponent>
      </Container>
    </div>
  );
};

export default Home;
