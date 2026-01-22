import { PRICE_PER_HOUR } from "@/utils/constants";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    const amount = data.duration * PRICE_PER_HOUR

    await transporter.sendMail({
      from: `"Premium Hygiene Solutions LLC" <${process.env.GMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: "🧹 New Appointment Booking – Action Required",
      html: `
        <div style="background:#f4f6f8;padding:20px;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      
            <!-- Body -->
            <div style="padding:20px;color:#333;">
              <p>Hi Administrator,</p>
              <p>
                You have received a new appointment booking.  
                Please review the details below and confirm the appointment.
              </p>
      
              <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      
              <h3 style="color:#0d6efd;">Customer Details</h3>
              <table style="width:100%;font-size:14px;">
                <tr><td><b>Name</b></td><td>${data.name}</td></tr>
                <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
                <tr><td><b>Email</b></td><td>${data.email}</td></tr>
                <tr><td><b>Location</b></td><td>${data.address}</td></tr>
              </table>
      
              <h3 style="color:#0d6efd;margin-top:20px;">Booked for</h3>
              <table style="width:100%;font-size:14px;">
                <tr><td><b>Service</b></td><td>${data.service}</td></tr>
                <tr><td><b>Amount</b></td><td>${amount || "AED 0.00"}</td></tr>
                <tr><td><b>Duration</b></td><td>${data.duration || "N/A"}</td></tr>
              </table>
      
              <h3 style="color:#0d6efd;margin-top:20px;">Appointment Details:</h3>
              <table style="width:100%;font-size:14px;">
                <tr><td><b>Date</b></td><td>${data.date}</td></tr>
                <tr><td><b>Time</b></td><td>${data.time}</td></tr>
              </table>
      
              <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      
              <p style="font-size:14px;color:#555;">
                This appointment is currently <b>pending confirmation</b>.
                Please take necessary action.
              </p>
            </div>

            <div style="padding-left: 20px;">
              <p style="font-size:14px;color:#333;">
              Thank you,<br/>
              <b>Premium Hygiene Solutions LLC</b>
              </p>
            </div>
            
            <!-- Footer -->
            <div style="background:#f1f1f1;text-align:center;padding:12px;font-size:12px;color:#666;">
              © ${new Date().getFullYear()}Premium Hygiene Solutions LLC. All rights reserved.
            </div>
      
          </div>
        </div>
        `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
