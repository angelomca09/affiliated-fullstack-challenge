import express from "express";
import service from "../services/auth.service";

async function signIn(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Username and Password are necessary!");
    }
    res.send(await service.signIn(req.body));
  } catch (err) {
    next(err);
  }
}
async function logIn(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Username and Password are necessary!");
    }
    res.send(await service.logIn(req.body));
  } catch (err) {
    next(err);
  }
}

export default { signIn, logIn };
