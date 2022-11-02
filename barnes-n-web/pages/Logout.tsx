import Header from "./components/Header";
import { useState, createRef } from 'react'
import getConfig from 'next/config'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';






const Logout = () => {

    const { publicRuntimeConfig } = getConfig();
    const backendUrl = publicRuntimeConfig.backendUrl;
    const [success, setSuccess] = useState(0);
    const [statusMessage, setStatusMessage] = useState("");
    const [hasError, setHasError] = useState(false);

    const logout = async () => {
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
            <Header />
        </div>
    )
}

export default Logout