import type { NextApiRequest, NextApiResponse } from "next";
import connectionPool from "@/lib/db"

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
  /*
        Request Body:
         - username
         - hashedPassword

        Response
            - accessToken
    */

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {username, password} = req.body;

    //Get the hashedPassword from db
    const query = `SELECT user_id, hashedPassword from Users WHERE username = '${username}'`;
    try {
        connectionPool.query(
            query,
            (error: any, results:any, fields: any) => {
                if (error) {
                    throw error;
                }
                if (results.length === 0) {
                    return res.status(401).send({
                        message: "User does not exist"
                    });
                }

                const {userId, hashedPassword} = results[0];
                const salt = bcrypt.getSalt(hashedPassword);
                const reqHashedPassword = bcrypt.hashSync(password, salt);
                const isPasswordValid = (hashedPassword === reqHashedPassword);

                if(!isPasswordValid) {
                    return res.status(401).send({
                        message: "Invalid password!"
                    });
                }

                //const privateKey = process.env.SERVER_PRIVATE_KEY;
                const privateKeyBase64 : String = process.env.SERVER_PRIVATE_KEY || "";
                const privateKey = Buffer.from(privateKeyBase64, 'base64').toString('utf8')

                const token = jwt.sign({id: userId}, privateKey, {
                    expiresIn: 86400, // 24 hours
                    algorithm: 'RS256'
                })

                return res.status(200).send({
                    userId: userId,
                    token:  token
                });
            }
        );
    } catch (error: any) {
        res.status(500).send({message: error.message});
    }
}