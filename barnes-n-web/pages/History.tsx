import Header from "./components/Header";
import { useState, createRef } from 'react'
import getConfig from 'next/config'
//import type { Listing } from "./Result";
//import Result from "./Result";


const History = () => {

    const { publicRuntimeConfig } = getConfig();
    const backendUrl = publicRuntimeConfig.backendUrl;
    const [success, setSuccess] = useState(0);
    const [statusMessage, setStatusMessage] = useState("");
    const [hasError, setHasError] = useState(false);

    const getHistory = async () => {
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

export default History