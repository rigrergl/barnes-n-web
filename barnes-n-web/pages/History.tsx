import Header from "./components/Header";
import { useState, useEffect } from "react";
import getConfig from "next/config";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HistoricalLoanList from "./components/HistoricalLoanList";
import HistoricalCheckOutList from "./components/HistoricalCheckOutList";
import type { HistoricalLoanListing } from "./components/HistoricalLoanResult";
import type { HistoricalCheckOutListing } from "./components/HistoricalCheckOutResult";

const History = () => {
  const { publicRuntimeConfig } = getConfig();
  const backendUrl = publicRuntimeConfig.backendUrl;
  const [success, setSuccess] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [checkoutListings, setcheckOutListings] =
    useState<HistoricalCheckOutListing[]>();
  const [loanListings, setLoanListings] = useState<HistoricalLoanListing[]>();

  useEffect(() => {
    //Const call here :D
    //Ex: getCheckoutHistory();
    getCheckoutHistory();
    getLoanHistory();
  }, []);

  const getCheckoutHistory = async () => {
    const response = await fetch(backendUrl + "/listings/myCheckouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await response.json();
    setHasError(response.status !== 200);
    setStatusMessage(data.message);
    setcheckOutListings(data);
  };

  const getLoanHistory = async () => {
    const response = await fetch(backendUrl + "/listings/myListings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await response.json();
    setHasError(response.status !== 200);
    setStatusMessage(data.message);
    setLoanListings(data);
  };

  return (
    <div className="page">
      <Header />
      <Container fluid="sm" className="historyBox">
        <Row>
          <Col className="submissionText">History</Col>
          <HistoricalCheckOutList results={checkoutListings} />
        </Row>
      </Container>
    </div>
  );
};

export default History;
