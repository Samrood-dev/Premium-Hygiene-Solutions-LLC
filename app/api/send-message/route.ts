import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { formData } = await req.json();
    const { name, email, phone, message } = formData;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Premium Hygiene Solutions LLC" <${process.env.GMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: "📩 New Contact Message Received",
      html: `
        <div style="background:#f4f6f8;padding:20px;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

            <!-- Body -->
            <div style="padding:20px;color:#333;">
              <p>Hi Administrator,</p>
              <p>You have received a new message from the contact form.</p>

              <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />

              <h3 style="color:#0d6efd;">Sender Details</h3>
              <table style="width:100%;font-size:14px;">
                <tr><td><b>Name</b></td><td>${name}</td></tr>
                <tr><td><b>Email</b></td><td>${email}</td></tr>
                <tr><td><b>Phone</b></td><td>${phone}</td></tr>
              </table>

              <h3 style="color:#0d6efd;margin-top:20px;">Message</h3>
              <div style="background:#f9f9f9;padding:12px;border-radius:6px;font-size:14px;">
                ${message.replace(/\n/g, "<br />")}
              </div>

              <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />

              <p style="font-size:14px;color:#555;">
                Please reply to the customer as soon as possible.
              </p>
            </div>

            <div style="padding-left:20px;">
              <p style="font-size:14px;color:#333;">
                Thank you,<br/>
                <b>Premium Hygiene Solutions LLC</b>
              </p>
            </div>

            <!-- Footer -->
            <div style="background:#f1f1f1;text-align:center;padding:12px;font-size:12px;color:#666;">
              © ${new Date().getFullYear()} Premium Hygiene Solutions LLC. All rights reserved.
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact message error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
