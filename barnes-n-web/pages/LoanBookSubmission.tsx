import { useState, createRef } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
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
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { publicRuntimeConfig } = getConfig();
    const backendUrl = publicRuntimeConfig.backendUrl;

//Please log in before submitting a page message maybe??
//Don't allow to submit unless checkbox is clicked

    return (
        <Form style={{ paddingLeft: "35%", width: "70%", paddingTop: 50}}>
             {isSubmitted &&
                (<Alert variant="success">
                    Successfully logged in!
                </Alert>)}
            <Form.Group as={Row} className = "mb-3">
                <Form.Label htmlFor="inputLoanerName"> </Form.Label>
                <Form.Control
                    onChange={(e) => setLoanername(e.target.value)}
                    type="text"
                    id="inputLoanerName"
                    placeholder="Enter your name" 
                />
            </Form.Group>
            <FormGroup  as={Row} className = "mb-3">
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
            </FormGroup>
            <FormGroup  as={Row} className = "mb-3">
                <Form.Label htmlFor="inputBookName"></Form.Label>
                <Form.Control
                    onChange={(e) => setBookName(e.target.value)}
                    type="text"
                    id="inputBookName"
                    placeholder="Enter book's name" 
                />
            </FormGroup>
            <FormGroup  as={Row} className = "mb-3">
                <Form.Label htmlFor="inputAuthorName"></Form.Label>
                <Form.Control
                    onChange={(e) => setAuthorName(e.target.value)}
                    type="text"
                    id="inputAuthorName"
                    placeholder="Enter author's name" 
                />
            </FormGroup>
            <FormGroup  as={Row} className = "mb-3">
                <Form.Label htmlFor="inputISBN10"></Form.Label>
                <Form.Control
                    onChange={(e) => setISBN10(e.target.value)}
                    type="text"
                    id="inputISBN10"
                    placeholder="Enter ISBN 10" 
                />
            </FormGroup>
            <FormGroup  as={Row} className = "mb-3">
                <Form.Label htmlFor="inputISBN13"></Form.Label>
                <Form.Control
                    onChange={(e) => setISBN13(e.target.value)}
                    type="text"
                    id="inputISBN13"
                    placeholder="Enter ISBN 13" 
                />
            </FormGroup>

            
            <FormGroup  as={Row} className = "mb-3">
                <Form.Label htmlFor="inputPrice"></Form.Label>
                <Form.Control
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    id="inputPrice"
                    placeholder="Enter price" 
                />

            </FormGroup>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                
                <Form.Check type="checkbox" label="I agree that the information above is completely accurate" />
            </Form.Group>

            <div style={{ width: 100, paddingTop: 10, marginLeft: "auto" }}>
                <Button onClick={LoanBookSubmission} style={{ float: "right" }} variant="primary">Submit</Button>
            </div>
        </Form>

    )
}

export default LoanBookSubmission