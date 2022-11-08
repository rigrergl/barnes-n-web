import Header from "./components/Header";
import { useState, createRef } from "react";
import getConfig from "next/config";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";

const Logout = () => {
  const { publicRuntimeConfig } = getConfig();
  const backendUrl = publicRuntimeConfig.backendUrl;
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); //non null means we have gotten a response from the api

  const logout = async () => {
    const response = await fetch(backendUrl + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setSuccess(response.ok);
    setStatusMessage(data.message);
  };

  return (
    <div className="page">
      <Header />

      <Container fluid="sm" className="loginBox2">
        <Row className="toastRow">
          {statusMessage && (
            <Alert className="alertToast" variant={success? "success" : "danger"}>
              {statusMessage}
            </Alert>
          )}
        </Row>
        <Row>
          <Col className="logoutText">Logout</Col>
        </Row>

        <Row>
          <Col>
            <Button className="submitButton" onClick={logout} variant="primary">
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Logout;
