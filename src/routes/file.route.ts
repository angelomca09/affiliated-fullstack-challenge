import express from "express";
import fileController from "../controllers/file.controller";

const route = express.Router();

route.post("/fileupload", fileController.readFile)

export default route;