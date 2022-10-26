const jwt = require('jsonwebtoken');
import secureLog from '@/lib/SecureLog';

const publicKeyBase64: String = process.env.SERVER_PUBLIC_KEY || "";
const publicKey = Buffer.from(publicKeyBase64, 'base64').toString('utf8');

var verifyToken = (token: any) => {
    try {
        const decoded = jwt.verify(token, publicKey);
        console.log(decoded);
    } catch (err) {
        secureLog(err);
    }
}

export default verifyToken;