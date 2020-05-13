import { Request, Response, NextFunction } from "express";
import {UNAUTHORIZED} from 'http-status-codes'
import * as jwt from "jsonwebtoken";
import config from "../../config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  // Get the jwt token from the head
  const auth = req.headers["authorization"] as string;
  if (!auth) {
    res.status(UNAUTHORIZED).send({error: "Must be authorized."});
    return;
  }
  const token = auth.split(' ')[1]
  let jwtPayload;
  
  // Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(UNAUTHORIZED).send({error: "Must be authorized."});
    return;
  }

  // The token is valid for 1 hour
  // We want to send a new token on every request
  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
    expiresIn: config.jwtExpiration
  });
  res.setHeader("token", newToken);

  // Call the next middleware or controller
  next();
};
