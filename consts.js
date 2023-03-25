import dotenv from "dotenv";

dotenv.config();

export const DB_CONNECTION_STRING =
  // process.env.DB_CONNECTION_STRING ||
  "mongodb://localhost:27017";
export const JWT_SECRET = process.env.JWT_SECRET || "something-else";

export const CLIENT_ID =
  "176255015504-qvgnd5lsrpv4pgvu53r59900phnjtbd1.apps.googleusercontent.com";
export const ClIENT_SECRET = "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";
export const REDIRECT_URL = "https://developers.google.com/oauthplayground";
export const REFRESH_TOKEN =
  "1//04B_M8YI-ssEGCgYIARAAGAQSNwF-L9Irdlmqwq5R1D2zmjK0tYV55q9EtUBIUbYA7wOHa6mr2rzZAPQZkmvm8R76fECeR83Mp4U";

console.log("Following global constants are defined:");
console.log({ DB_CONNECTION_STRING, JWT_SECRET });
