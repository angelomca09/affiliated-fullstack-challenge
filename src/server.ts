import express from "express";
import path from "path";
import upload from "express-fileupload";
import { authorizer } from "./middlewares/auth.middleware";
import cors from "cors";
import basicAuth from "express-basic-auth";

const server = express();

//* INTERFACE SERVING *//
server.use(express.static(path.join(__dirname, "www")));
server.use(express.static(path.join(__dirname, "www", "assets")));

server.use(express.json());
server.use(upload());
server.use(cors());


//#region //* ROUTES *//

//* Routes without auth

import authRoute from "./routes/auth.route";
server.use("/auth", authRoute);

//* BasicAuth
server.use(
  basicAuth({
    authorizer,
    authorizeAsync: true,
  })
);

//* Routes with Auth
import fileRoute from "./routes/file.route";
server.use(fileRoute)

//#endregion

export default server