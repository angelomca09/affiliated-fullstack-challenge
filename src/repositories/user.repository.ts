import User from "../models/user.model";

async function insertUser(user: any) {
  try {
    return await User.create(user);
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username: string) {
  try {
    if (username === "admin") return "";
    return await User.findOne({ where: { username } });
  } catch (error) {
    throw error;
  }
}

async function getUserPasswordByUsername(username: string) {
  try {
    const user = await User.findOne({ where: { username } })
    return user?.dataValues?.password
  } catch (error) {
    throw error;
  }
}

async function existUser(username: string) {
  try {
    const user = await User.findOne({ where: { username } })
    return !!user;
  } catch (error) {
    throw error;
  }
}

export default {
  insertUser,
  getUserByUsername,
  getUserPasswordByUsername,
  existUser
};
