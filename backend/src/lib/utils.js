import jwt from "jsonwebtoken";
import { ENV } from "./env.js";
import { getAuthCookieOptions } from "./cookies.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = ENV;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, getAuthCookieOptions(7 * 24 * 60 * 60 * 1000));

  return token;
};

// http://localhost
// https://dsmakmk.com
