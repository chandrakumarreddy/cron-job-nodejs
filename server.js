import express from "express";
import cron from "node-cron";
import nodemailer from "nodemailer";

const PORT = 3000;

cron.schedule("* * * * * *", function () {
  const messageOptions = {
    from: "",
    to: "",
    subject: "Scheduled Email",
    text: `Hi there. This email was automatically sent by us. ${Math.ceil(
      Math.random() * 100
    )}`,
  };

  const transporter = nodemailer.createTransport({
    service: "",
    host: "",
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
  });

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

const app = express();

app.listen(PORT, () => {
  console.log(`server is listening at PORT ${PORT}`);
});
