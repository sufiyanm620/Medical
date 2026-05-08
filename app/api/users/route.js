import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

/* =========================
SIGNUP — CREATE ACCOUNT
========================= */
export async function POST(req) {
  const db = await connectDB();
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "All fields required" },
      { status: 400 }
    );
  }

  // Check existing user
  const user = await db.collection("users").findOne({ email });

  if (user) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  // Secure password
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return NextResponse.json({
    message: "Signup successful 💙",
  });
}

/* =========================
LOGIN — VERIFY ACCOUNT
========================= */
export async function PUT(req) {
  const db = await connectDB();
  const { email, password } = await req.json();

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 400 }
    );
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "Login successful 💙",
    email: user.email,
    name: user.name,
  });
}
