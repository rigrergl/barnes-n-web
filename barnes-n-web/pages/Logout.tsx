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
  const [statusMessage, setStatusMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const logout = () => {
    setSuccess(true);
    setStatusMessage("You have logged out");
  };

  const logout2 = async () => {
    const response = await fetch(backendUrl + "/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await response.json();
    setHasError(response.status !== 200);
    setStatusMessage(data.message);
  };

  return (
    <div className="page">
      <Header />

      <Container fluid="sm" className="loginBox2">
        <Row className="toastRow">
          {success && (
            <Alert className="alertToast" variant="success">
              Successfully logged out!
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
