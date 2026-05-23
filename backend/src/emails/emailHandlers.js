import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

const transporter = nodemailer.createTransport({ 
  service:"gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,   
    pass: process.env.ADMIN_EMAIL_PASSWORD,   
  },
});

const sender = {
  name: "Chatify",
  email: process.env.ADMIN_EMAIL,
};

export const sendWelcomeEmail = async (email, name, clientURL) => {
  try {
    const info = await transporter.sendMail({
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Welcome to Chatify!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    console.log("Welcome Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};
