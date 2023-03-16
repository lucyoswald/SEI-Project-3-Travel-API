import dotenv from "dotenv";

dotenv.config();

export const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017";
export const JWT_SECRET = process.env.JWT_SECRET || "something-else";

console.log("Following global constants are defined:");
console.log({ DB_CONNECTION_STRING, JWT_SECRET });
