import { expressjwt } from "express-jwt";
import jsonwebtoken from "jsonwebtoken";

export const SCERET_KEY =
  "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";

export const createJWTToken = (payload = {}) => {
  const token = jsonwebtoken.sign(payload, SCERET_KEY, {
    algorithm: "HS256",
    expiresIn: "7d",
  });
  return token;
};

export const ignoreToken = () => {
  return expressjwt({ secret: SCERET_KEY, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/api/users/add",
      "/api/users/login",
    ],
  });
};

export const verifyJwtToken = (req, res, next) => {
  try {
    const authHeader = req?.headers["authorization"];
    const bearer = authHeader?.split(" ");
    const token = bearer[1];
    if (!token) {
      res?.sendStatus(400).json({
        message: "Invalid Token",
      });
      return;
    }
    jsonwebtoken.verify(token, SCERET_KEY, (err, payload) => {
      if (!err) {
        const id = payload.id;
        req.headers.userData = { id };
        next();
      } else {
        res?.sendStatus(400).json({
          message: err?.message,
        });
        return;
      }
    });
  } catch (err) {
    res.sendStatus(401).json({
      error: err,
    });
  }
};
