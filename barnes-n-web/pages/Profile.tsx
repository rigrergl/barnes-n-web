import Header from "./components/Header";
import Link from 'next/link'
import { useState, useEffect } from 'react'
import getConfig from 'next/config'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';
import NavigateEdit from "./components/NavigateEdit";


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
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => { 
    checksignin();
  }, [] );

  const checksignin = () => {
    fetch(backendUrl + "/auth/verifyCredentials", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        response => {
            if (response.ok) {
                setLoggedIn(true);
                console.log(loggedIn);
            } else {
                // TODO
            }
        }
    )
  }

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

      {loggedIn && (<Row className='toastRow'>
        {statusMessage &&
                  (<Alert className='alertToast' variant={hasError? "danger" : "success"}>
                      {statusMessage}
                  </Alert>)}
        </Row>)}

      <Row >
        <Col className='registrationText'>
          Profile 
        </Col>
      </Row>

      {loggedIn && (<Row>
        <Col className='registrationInputBox2 top2'>
            Username: {username}
        </Col>
      </Row>)}
        
      {loggedIn && (<Row>
        <Col className='registrationInputBox2 top2'>
        Name: {name}
        </Col>
      </Row>)}

      {loggedIn && (<Row>
        <Col className='registrationInputBox2 top2'>
        Phone: {phone}

        </Col>
      </Row>)}

      {loggedIn && (<Row>
        <Col className='registrationInputBox2 top2'>
        Email: {email}

        </Col>
      </Row>)}

      {loggedIn && (<Row>
        <Col className='registrationInputBox2 top2'>
        Street: {street}

        </Col>
      </Row>)}

      {loggedIn && (<Row>
        <Col className='registrationInputBox2 top2'>
        Optional: {optAddress}
        </Col>
      </Row>)}

      {loggedIn && (<Row className='registrationCityInputBox top2'>
        <Col >
        City: {city}
        </Col>
      </Row>)}

      {loggedIn && (<Row className='registrationCityInputBox top2'>
        <Col >
        State: {state}
        </Col>
      </Row>)}

      {loggedIn && (<Row className='registrationCityInputBox top2'>
        <Col >
        Zipcode: {zipcode}
        </Col>
      </Row>)}

      <Row>
        <Col >
        {loggedIn && (<NavigateEdit />)}

        {!loggedIn && (<Col className='top2'>
            <p style={{textAlign:'center'}}>You are not Logged in</p>
            <Link href="/Login" >
                <a><button className="submitButton" style={{borderRadius:'25px'}}>Login Page</button></a>
            </Link>
          </Col>)}
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Profile
