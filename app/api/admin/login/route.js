import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  // ⚠️ Hardcoded admin (simple version)
  const ADMIN_EMAIL = "admin@medimeet.com";
  const ADMIN_PASSWORD = "admin123";

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Invalid admin credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { role: "admin", email },
    "ADMIN_SECRET",
    { expiresIn: "7d" }
  );

  return NextResponse.json({ token });
}