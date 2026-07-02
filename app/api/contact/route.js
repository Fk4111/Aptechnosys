import { NextResponse } from "next/server";
import { Resend } from "resend";
import { connectDB } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
    } = body;

    // Validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
    });

    // -----------------------------
    // Email to Company
    // -----------------------------
    const { error: adminError } = await resend.emails.send({
      from: "Aptechnosys <onboarding@resend.dev>",
      to: ["khanfaiyaz359@gmail.com"], // Change after domain verification
      replyTo: email,
      subject: `🚀 New Website Enquiry | ${name}`,
      html: `
      <div style="font-family:Arial;padding:30px;background:#f4f4f4">
        <div style="max-width:700px;background:#fff;margin:auto;padding:30px;border-radius:12px">

          <h2 style="color:#2563eb">
            New Website Enquiry
          </h2>

          <table width="100%" cellpadding="10" cellspacing="0" border="1" style="border-collapse:collapse">

            <tr>
              <td><b>Name</b></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><b>Email</b></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><b>Phone</b></td>
              <td>${phone || "-"}</td>
            </tr>

            <tr>
              <td><b>Company</b></td>
              <td>${company || "-"}</td>
            </tr>

            <tr>
              <td><b>Project Type</b></td>
              <td>${projectType}</td>
            </tr>

            <tr>
              <td><b>Budget</b></td>
              <td>${budget || "-"}</td>
            </tr>

          </table>

          <h3 style="margin-top:30px">
            Project Details
          </h3>

          <p>${message}</p>

          <hr/>

          <p>
            Submitted on:
            ${new Date().toLocaleString("en-IN")}
          </p>

        </div>
      </div>
      `,
    });

    if (adminError) {
      console.error(adminError);

      return NextResponse.json(
        {
          success: false,
          error: adminError.message,
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------
    // Auto Reply to Visitor
    // -----------------------------
    await resend.emails.send({
      from: "Aptechnosys <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Aptechnosys",
      html: `
      <div style="font-family:Arial;padding:30px;background:#f4f4f4">

        <div style="max-width:650px;margin:auto;background:white;padding:35px;border-radius:12px">

          <h2 style="color:#2563eb">
            Thank you for contacting Aptechnosys 👋
          </h2>

          <p>
            Hi <strong>${name}</strong>,
          </p>

          <p>
            Thank you for reaching out to us.
          </p>

          <p>
            We've successfully received your enquiry regarding
            <strong>${projectType}</strong>.
          </p>

          <p>
            Our team will review your requirements and get back to
            you within <strong>24 hours</strong>.
          </p>

          <hr/>

          <p>
            Regards,
          </p>

          <p>
            <strong>Aptechnosys Team</strong><br/>
            Custom Software & Web Development
          </p>

        </div>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
      enquiryId: enquiry._id,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}