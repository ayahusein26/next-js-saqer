import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // in-v3.mailjet.com
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,               // STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER!, // API Key
        pass: process.env.EMAIL_PASS!, // Secret Key
      },
    });

    await transporter.sendMail({
      from: `"Prime Tech Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Server error while sending email" },
      { status: 500 }
    );
  }
}
