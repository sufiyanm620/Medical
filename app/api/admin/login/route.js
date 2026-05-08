import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const ADMIN_SECRET = process.env.ADMIN_SECRET;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !ADMIN_SECRET) {
    return NextResponse.json(
      { error: "Admin authentication is not configured" },
      { status: 500 }
    );
  }

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Invalid admin credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { role: "admin", email },
    ADMIN_SECRET,
    { expiresIn: "7d" }
  );

  return NextResponse.json({ token });
}
