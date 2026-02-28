"use server";

import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["himanshuazad05@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
            `,
    });

    return {
      success: true,
      data: response,
    };
  } catch (err) {
    console.error("Email sending failed:", err);

    return {
      success: false,
      error: "Failed to send email. Please try again.",
    };
  }
}