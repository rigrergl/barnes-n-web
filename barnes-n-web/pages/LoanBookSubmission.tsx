import { useState, createRef } from 'react'
import Header from "./components/Header";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import getConfig from 'next/config'
import { Alert, FormGroup } from 'react-bootstrap';

const bcrypt = require("bcryptjs");

const LoanBookSubmission = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn10, setISBN10] = useState("");
    const [isbn13, setISBN13] = useState("");
    const [maxDueDate, setReturnBy] = useState("");
    const [accept, setAccept] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { publicRuntimeConfig } = getConfig();
    const backendUrl = publicRuntimeConfig.backendUrl;

    const [statusMessage, setStatusMessage] = useState("");
    const [hasError, setHasError] = useState(false);

    const createListing = async () => {
        if (
            title != "" &&
            author != "" &&
            isbn10 != "" &&
            isbn13 != "" &&
            maxDueDate != ""
        ) {
            const response = await fetch(backendUrl + "/listings/createListing", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    isbn10: isbn10,
                    isbn13: isbn13,
                    author: author,
                    maxDistance: '50',
                    maxDueDate: maxDueDate,
                }),
            });

            const data = await response.json();
            setHasError(response.status !== 200);
            setStatusMessage(data.message);
            setIsSubmitted(true);
        }
        else {
            setStatusMessage("All Fields must be entered");
        }
    };



    return (
        <div className='page'>
            <Header />

            <Container fluid="sm" className='submissionBox2'>

                <Row className='toastRow'>
                    {isSubmitted &&
                        (<Alert className='alertToast' variant="success">
                            {statusMessage}
                            Successfully submitted a book to be loaned out!
                        </Alert>)}
                </Row>

                <Row >
                    <Col className='submissionText'>
                        Book Submission Form
                    </Col>
                </Row>

                <Row >
                    <Col className='submissionSmallText'>
                        Ready to loan your book? - Please enter all necessary information
                    </Col>
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputTitle"></Form.Label>
                    <Form.Control
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        id="inputTitle"
                        placeholder="Enter the book's title"
                    />
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputAuthor"></Form.Label>
                    <Form.Control
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        id="inputAuthor"
                        placeholder="Enter the author's name"
                    />
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputISBN10"></Form.Label>
                    <Form.Control
                        onChange={(e) => setISBN10(e.target.value)}
                        type="text"
                        id="inputISBN10"
                        placeholder="Enter ISBN 10"
                    />
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputISBN13"></Form.Label>
                    <Form.Control
                        onChange={(e) => setISBN13(e.target.value)}
                        type="text"
                        id="inputISBN13"
                        placeholder="Enter ISBN 13"
                    />
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputReturnBy"></Form.Label>
                    <Form.Control
                        onChange={(e) => setReturnBy(e.target.value)}
                        type="Calender"
                        id="inputReturnBy"
                        placeholder="Enter Return By Date"
                    />
                </Row>

                <Row className="mx-auto mb-3" >
                    <Form.Check type="checkbox" id='checkBox' onChange={() => setAccept(!accept)} label="I agree that the information above is completely accurate" />
                </Row>

                <Row>
                    {accept && (<Button
                        className='submitButton'
                        name='submission'
                        onClick={createListing}
                        variant="primary">Submit</Button>)}
                </Row>

            </Container>
        </div>
    )
}

export default LoanBookSubmission