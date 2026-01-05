import express from "express";
import Lead from "../models/Lead.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  const lead = await Lead.create({ name, email, message });

  // Email notify
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    from: `"Skyreti EduCore" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Lead Received",
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`
  });

  res.json({ success: true, lead });
});

export default router;
