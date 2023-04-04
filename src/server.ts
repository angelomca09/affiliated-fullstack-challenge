import express from "express";
import upload from "express-fileupload";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(upload());
server.use(cors());

//#region //* ROUTES *//

import fileRoute from "./routes/file.route";
server.use(fileRoute)

//#endregion

export default server