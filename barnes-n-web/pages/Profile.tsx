import Header from "./components/Header";
import { useState, createRef } from 'react'
import getConfig from 'next/config'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import NavigateEdit from "./components/NavigateEdit";
import StateDropdown from "./components/StateDropdown"


const Profile = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [optAddress, setOptAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [success, setSuccess] = useState(0);

  const [statusMessage, setStatusMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const { publicRuntimeConfig } = getConfig();
  const backendUrl = publicRuntimeConfig.backendUrl;

  const getprofileinfo = async () => {
    

        const response = await fetch(backendUrl + "/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

            })
        });
        

        const data = await response.json();
        setHasError(response.status !== 200);
        setStatusMessage(data.message);
}

  return (
    <div className='page'>
      
      {/* Header Component */}
      <Header />

      <Container fluid="sm" className='profileBox'>

        <Row className='toastRow'>
        {statusMessage &&
                  (<Alert className='alertToast' variant={hasError? "danger" : "success"}>
                      {statusMessage}
                  </Alert>)}
        </Row> 

      <Row >
        <Col className='registrationText'>
          Profile 
        </Col>
      </Row>

      <Row>
        <Col className='registrationInputBox2 top2'>
            Username: {username}
        </Col>
      </Row>
        
      <Row>
        <Col className='registrationInputBox2 top2'>
        Name: {name}
        </Col>
      </Row>

      <Row>
        <Col className='registrationInputBox2 top2'>
        Phone: {phone}

        </Col>
      </Row>

      <Row>
        <Col className='registrationInputBox2 top2'>
        Email: {email}

        </Col>
      </Row>

      <Row>
        <Col className='registrationInputBox2 top2'>
        Street: {street}

        </Col>
      </Row>

      <Row>
        <Col className='registrationInputBox2 top2'>
        Optional: {optAddress}
        </Col>
      </Row>

      <Row className='registrationCityInputBox top2'>
        <Col >
        City: {city}
        </Col>
        </Row>
        <Row className='registrationCityInputBox top2'>
        <Col >
        State: {state}
        </Col>
      </Row>

      <Row className='registrationCityInputBox top2'>
        <Col >
        Zipcode: {zipcode}
        </Col>
      </Row>

      <Row>
        <Col >
          <NavigateEdit />
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Profile
