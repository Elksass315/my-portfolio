import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
    name?: string;
    email?: string;
    message?: string;
};

export async function POST(request: Request) {
    const payload = (await request.json()) as ContactPayload;
    const { name, email, message } = payload;

    if (!name || !email || !message) {
        return NextResponse.json(
            { success: false, message: "Name, email, and message are required." },
            { status: 400 }
        );
    }

    console.info("New contact request", { name, email, message });

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Portfolio Inquiry from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
                <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">New Project Inquiry</h2>
                
                <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <p style="margin: 10px 0;"><strong style="color: #334155;">Name:</strong> <span style="color: #64748b;">${name}</span></p>
                    <p style="margin: 10px 0;"><strong style="color: #334155;">Email:</strong> <span style="color: #64748b;">${email}</span></p>
                    
                    <div style="margin-top: 20px;">
                        <strong style="color: #334155;">Message:</strong>
                        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 5px; margin-top: 10px; color: #475569; white-space: pre-wrap;">${message}</div>
                    </div>
                </div>
                
                <p style="margin-top: 20px; color: #94a3b8; font-size: 12px; text-align: center;">
                    This inquiry was submitted through your portfolio contact form.
                </p>
            </div>
        `,
        text: `
New Project Inquiry

Name: ${name}
Email: ${email}

Message:
${message}

---
This inquiry was submitted through your portfolio contact form.
        `,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: "Message sent successfully!"
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send message. Please try again later."
            },
            { status: 500 }
        );
    }
}
