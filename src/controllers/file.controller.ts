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

async function getSales(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    res.send(await fileService.getSales());
  } catch (err) {
    next(err);
  }
}

async function getSale(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const { sale_id } = req.params;
    if (!sale_id) {
      throw new Error("sale_id é obrigatório!!");
    }
    res.send(await fileService.getSale(+sale_id));
  } catch (err) {
    next(err);
  }
}

export default {
  readFile,
  getSales,
  getSale
}