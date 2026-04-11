import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const db = await connectDB();

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User created successfully" });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}