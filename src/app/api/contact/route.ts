import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would connect to a database or an email service (Resend, SendGrid) here.
    // For now, we are logging the mock data connection.
    console.log("Received contact form submission:", body);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json(
      { message: "Thank you for reaching out! A representative from Oasis Energy will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
