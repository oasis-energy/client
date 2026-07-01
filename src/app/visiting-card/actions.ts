"use server";

import { cookies } from "next/headers";

export async function authenticate(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === "OasisAdmin" && password === "Oasis#Admin1234") {
    // Set a secure, HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set("oasis_admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/visiting-card",
      maxAge: 60 * 60 * 24, // 1 day
    });
    return { success: true };
  }

  return { success: false, error: "Invalid username or password" };
}
