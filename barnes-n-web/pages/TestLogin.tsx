import { useState, createRef } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const TestLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const passwordInput = createRef();


    return (
        <Container style={{ width: "44%", paddingTop: 44 }}>
            <Row>
                <Form.Label htmlFor="inputUsername">Username</Form.Label>
                <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    id="inputUsername"
                />
            </Row>
            <Row>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </Form.Text>
            </Row>
        </Container>

    )
}

export default TestLogin