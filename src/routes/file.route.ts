import express from "express";
import fileController from "../controllers/file.controller";

const route = express.Router();

route.get("/sales", fileController.getSales)
route.get("/sale/:sale_id", fileController.getSale)
route.post("/fileupload", fileController.readFile)

export default route;