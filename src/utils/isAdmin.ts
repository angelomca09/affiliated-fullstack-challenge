import basicAuth from "express-basic-auth";

function isAdmin(username: string, password: string) {
  const admUserMatches = basicAuth.safeCompare(username, "admin");
  const admPwdMatches = basicAuth.safeCompare(password, "admin1");
  return admUserMatches && admPwdMatches;
}

export default isAdmin