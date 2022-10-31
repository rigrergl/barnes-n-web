import Header from "./components/Header";
import { useState, createRef } from 'react'
import getConfig from 'next/config'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';


const bcrypt = require("bcryptjs");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { publicRuntimeConfig } = getConfig();
  const backendUrl = publicRuntimeConfig.backendUrl;

  const login = () => {
    fetch(backendUrl + "/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(
        response => {
            if (response.ok) {
                setSuccess(true);
            } else {
                // TODO
            }
        }
    )
}

  return (
    <div className='page'>

        {/* Header Component */}
        <Header />
        
        <Container fluid="sm" className='loginBox2'>
          <Row className='toastRow'>
          {success &&
                  (<Alert className='alertToast' variant="success">
                      Successfully logged in!
                  </Alert>)}
          </Row>
        <Row >
        
          <Col className='loginText'>
            Login 
          </Col>
        </Row>
        <Row>
          <Col className='newUserLink'>
            New User? Sign Up
            <p className='newUserLine'></p>
          </Col>
        </Row>
        <Row>
          <Col >
            <Form.Label htmlFor="inputUsername">Username:</Form.Label>
            <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="inputUsername"
                placeholder="Username"
            />
          </Col>
        </Row>
        <Row>
          <Col className='top2'>
            <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
            <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
            />
            <a href='' style={{color:'black'}}>Forgot Password?</a> 
            <br/>
            {/*<Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
          </Form.Text>*/}
          </Col>
        </Row>
        <Row>
          <Col >
            <Button className='submitButton' onClick={login} variant="primary">Login</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login