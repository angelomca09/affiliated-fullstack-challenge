import express from "express";
import fileService from "../services/file.service";

async function readFile(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const file = (req.files?.teste as any)
    const buffer: Buffer = file.data;
    res.send(await fileService.parseFile(buffer));
  } catch (err) {
    next(err);
  }
}
export default {
  readFile
}