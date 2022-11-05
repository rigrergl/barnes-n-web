import {NextApiRequest, NextApiResponse} from "next";
import verifyToken from "@/lib/verifyToken";
import getCookieByName from "@/lib/getCookieByName";
import { TokenExpiredError } from "jsonwebtoken";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const cookie = req.headers.cookie || "";
    const accessToken = getCookieByName('accessToken', cookie);
    
    if (!accessToken) { // No access token found
        return res.status(401).send({
            message: "No access token found in cookies, please login",
            loggedIn: false
        })
    }

    try {
        const decodedToken = verifyToken(accessToken);
        console.log(decodedToken);
        res.status(200).send({
            userId: decodedToken.user_id,
            loggedIn: true
        });
    } catch (error: any) {
        if (error instanceof TokenExpiredError) {
            return res.status(401).send({
                message: "Access token expired, please login again",
                loggedIn: false
            });
        }
    }

}

