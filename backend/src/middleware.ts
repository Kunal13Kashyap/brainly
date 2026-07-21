import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string,JWT_SECRET as string);
    if(decoded){
        if(typeof decoded === "string"){
            return res.status(403).json({
                message: "You are not logged in"
            })
        }
        // @ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next();
    } else{
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}