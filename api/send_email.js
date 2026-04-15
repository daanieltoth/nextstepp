import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// reusable function
async function sendEmail({ name, email, message }) {
    return await resend.emails.send({
        from: "onboarding@resend.dev", // replace with your domain later
        to: "dtlabskapcsolat@gmail.com",
        subject: `A Next Step Inquiry from ${name}`,
        html: `
      <h2>New Contact Form Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
    });
}

// API handler
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body;

        // basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Missing fields" });
        }

        const data = await sendEmail({ name, email, message });

        return res.status(200).json({
            success: true,
            data,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
}