import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { usersController } from "./Controllers/users.js";
import { ignoreToken } from "./Middlewares/index.js";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// use JWT auth to secure the api
app.use(ignoreToken());

//middleware for API's Validation and parse the request body beofre react the controller
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "1GB" }));

//API ROUTES
app.use("/api/users", usersController);

const port = 4000;

app.listen(port, () => {
  console.log("=============>>>Server running on " + port);
});

export default app;
