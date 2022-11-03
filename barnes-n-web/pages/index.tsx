import type { NextPage } from "next";
import ExampleComponent from "./components/ExampleComponent";
import Container from "react-bootstrap/Container";
import React from 'react';
import TempPages from "./components/TempPages";
import Header from "./components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home: NextPage = () => {
  return (
    <div className="page">
      {/* Header Component */}
      <Header />

      <Container fluid="sm" className="registrationBox2">

        
      </Container>
    </div>
      
  );
};

export default Home;
