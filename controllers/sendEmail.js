import { transporter } from "../EmailConfig.js";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.OAUTH_EMAIL);

export const contactEmail = (req, res) => {
  const data = req.body;
  console.log(data);

  const mailOptions = {
    from: process.env.OAUTH_EMAIL,
    to: "abinandandev@gmail.com",
    subject: "Sports Club - Contact Us",
    html: `<div style="display:grid;background:#e3e3f0;padding:1rem;place-items:center;border-radius:1rem;">
    <div style="font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 3px 1px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid white;
    border-radius: 0.25rem;
    height: 2.5rem;
    display: flex;
    place-items: center;
    padding: 0 0.5rem;
    color: white;margin-bottom:2rem;">
            Sports Club
          </div>
    <div><span style="font-size:1.25rem;">Name: </span>
    <p style="color:#3b5741;"> ${data.name}</p></div>
    <div><span style="font-size:1.25rem;">Roll Number: </span>
    <p style="color:#3b5741;"> ${data.rollNo}</p></div>
    <div><span style="font-size:1.25rem;">Query: </span>
          <p style="color:#3b5741;"> ${data.query}</p></div>
        </div>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.status(201).json({ msg: "success", msgId: info.messageId });
  });
  //   res.status(201).json({ msg: "success", data });
};
