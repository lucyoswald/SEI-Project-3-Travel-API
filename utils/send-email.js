// import dotenv from "dotenv";
// import { google } from "googleapis";

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   ClIENT_SECRET,
//   REDIRECT_URL
// );

// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const sendEmail = async () => {
//   try {
//     const accessToken = await oAuth2Client.getAccesToken();

//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "oAuth2",
//         user: "contact.kcpetersen.gmail.com",
//         clientId: CLIENT_ID,
//         clientSecret: ClIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: "Design My Trip <contact.kcpetersen.gmail.com>",
//       to: "kpetersen@elon.edu",
//       subject: "Hello from Design My Trip",
//       text: "Hello again ",
//       html: "<h1>Hello again</h2> ",
//     };

//     const result = await transport.sendEmail(mailOptions);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

// sendEmail();
// console.log(result);
