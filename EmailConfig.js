import { google } from "googleapis";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const OAuth2 = google.auth.OAuth2;
const oauth2client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);
oauth2client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });
console.log(process.env.OAUTH_REFRESH_TOKEN);

const accessToken = await new Promise((resolve, reject) => {
  oauth2client.getAccessToken((err, token) => {
    if (err) {
      reject("Failed to create access token :(");
    }
    resolve(token);
  });
});
console.log(accessToken.toString());

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.OAUTH_EMAIL,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: accessToken.toString(),
  },
});
