import type { NextApiRequest, NextApiResponse } from "next";
import connectionPool from "@/lib/db"
var bcrypt = require('bcryptjs')

  /*
        Request Body:
         - username
         - hashedPassword

        Response
            - accessToken
    */

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {username, hashedPassword} = req.body;

    //Get the hashedPassword from db
    const query = `SELECT hashedPassword from Users WHERE username = '${username}'`;
    try {
        connectionPool.query(
            query,
            (error: any, results:any, fields: any) => {
                if (error) {
                    throw error;
                }

                const expectedHashedPassword = results[0].hashedPassword;
                const isPasswordValid = (expectedHashedPassword === hashedPassword);

                if(!isPasswordValid) {
                    return res.status(401).send({
                        message: "Invalid password!"
                    });
                }
            }
        );
    } catch (error: any) {
        res.status(500).send({message: error.message});
    }
}