import isAdmin from "../utils/isAdmin";
import repository from "../repositories/user.repository";

async function getRole(username: string) {
  let role = "basic"; //could be a request
  if (username === "admin") {
    role = "admin";
  }
  return role;
}

async function auth(username: string, password: string) {
  if (isAdmin(username, password)) return true;

  const userPassword = await repository.getUserPasswordByUsername(username);
  if (!userPassword) return false;

  return userPassword === password;
}

async function signIn(user: { username: string, password: string }) {
  if (user.username.toLowerCase() === "admin") {
    return errorWithMessage("Nice try ;P");
  }
  if (await repository.existUser(user.username)) {
    return errorWithMessage("Login unavailable.");
  }
  try {
    if (await repository.insertUser(user)) {
      return await success(user.username);
    }
  } catch (err) {
    return errorWithMessage("Sign In Error!");
  }
}

async function logIn(user: { username: string, password: string }) {
  const { username, password } = user;
  if (await auth(username, password)) {
    return await success(username);
  }
  return errorWithMessage("Wrong username or password!");
}

async function success(username: string) {
  let profile = {
    username,
  }

  return {
    success: true,
    access: await getRole(username),
    profile,
  };
}

async function errorWithMessage(message: string) {
  return {
    success: false,
    message,
  };
}

export default {
  getRole,
  auth,
  signIn,
  logIn,
};
