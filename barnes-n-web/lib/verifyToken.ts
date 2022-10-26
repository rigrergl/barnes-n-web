const jwt = require('jsonwebtoken');

const publicKeyBase64: String = process.env.SERVER_PUBLIC_KEY || "";
const publicKey = Buffer.from(publicKeyBase64, 'base64').toString('utf8');

var verifyToken = (token: any) => {
    jwt.verify(token, publicKey, (err: any, decoded: any) => {
        // TODO: do something 
    });
}

export default verifyToken;