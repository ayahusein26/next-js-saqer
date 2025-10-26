import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // إعداد SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ayahussein884@gmail.com", // بريد المرسل
        pass: process.env.EMAIL_PASS, // كلمة مرور التطبيق من Gmail
      },
    });

    // إعداد الإيميل
    const mailOptions = {
      from: `"Prime Tech Website" <${email}>`,
      to: "ayahussein884@gmail.com", // البريد الذي تصلك عليه الرسائل
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // إرسال البريد
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Server error while sending email" },
      { status: 500 }
    );
  }
}
