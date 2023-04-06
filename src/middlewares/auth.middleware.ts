import { AsyncAuthorizerCallback } from "express-basic-auth";
import authService from "../services/auth.service";
import isAdmin from "../utils/isAdmin";

async function authorizer(username: string, password: string, callback: AsyncAuthorizerCallback) {
  //Admin bypass
  if (isAdmin(username, password)) return callback(null, true);

  return callback(null, await authService.auth(username, password));
}

export {
  authorizer
}