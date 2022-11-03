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
    const [loanerName, setLoanername] = useState("");
    const [email, setEmail] = useState("");
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [ISBN10, setISBN10] = useState("");
    const [ISBN13, setISBN13] = useState("");
    const [price, setPrice] = useState("");
    // const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { publicRuntimeConfig } = getConfig();
    const backendUrl = publicRuntimeConfig.backendUrl;

    //Please log in before submitting a page message maybe??
    //Don't allow to submit unless checkbox is clicked

    return (
        <div className='page'>
            <Header />

            <Container fluid="sm" className='submissionBox2'>

                <Row className='toastRow'>
                    {isSubmitted &&
                        (<Alert className='alertToast' variant="success">
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

                <Row className="mx-auto mb-3">
                    <Form.Label htmlFor="inputLoanerName"> </Form.Label>
                    <Form.Control
                        onChange={(e) => setLoanername(e.target.value)}
                        type="text"
                        id="inputLoanerName"
                        placeholder="Enter your name"
                    />
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputEmail"></Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="inputEmail"
                        placeholder="Enter your email"
                    //aria-describedby="passwordHelpBlock"
                    />
                    {/* <Form.Text id="passwordHelpBlock" muted> We'll never share your email with anyone else.
                </Form.Text> */}
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputBookName"></Form.Label>
                    <Form.Control
                        onChange={(e) => setBookName(e.target.value)}
                        type="text"
                        id="inputBookName"
                        placeholder="Enter the book's name"
                    />
                </Row>

                <Row as={Row} className="mx-auto mb-3">
                    <Form.Label htmlFor="inputAuthorName"></Form.Label>
                    <Form.Control
                        onChange={(e) => setAuthorName(e.target.value)}
                        type="text"
                        id="inputAuthorName"
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
                    <Form.Label htmlFor="inputPrice"></Form.Label>
                    <Form.Control
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        id="inputPrice"
                        placeholder="Enter loaning price"
                    />
                </Row>

                <Row className="mx-auto mb-3" controlId="formBasicCheckbox">
                    {/* <FormCheck>
                        <FormCheck.Input isInvalid type={radio} />
                        <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
                        <Feedback type="invalid">Yo this is required</Feedback>
                    </FormCheck> */}

                    <Form.Check type="checkbox" id='checkBox' label="I agree that the information above is completely accurate" />
                </Row>

                <Row>
                    <Button
                        className='submissionButton'
                        name='submission'
                        onClick={LoanBookSubmission}
                        variant="primary">Submit</Button>
                </Row>

            </Container>
        </div>
    )
}

export default LoanBookSubmission