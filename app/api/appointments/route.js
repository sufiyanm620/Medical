import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

/* =========================
GET APPOINTMENTS
========================= */
export async function GET(req) {
  const db = await connectDB();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  let query = {};
  if (email) query.email = email;

  const appointments = await db
    .collection("appointments")
    .find(query)
    .toArray();

  return NextResponse.json(appointments);
}

/* =========================
UPDATE STATUS (APPROVE / REJECT / CANCEL)
========================= */
export async function PATCH(req) {
  const db = await connectDB();
  const body = await req.json();

  const { id, status } = body;

  await db.collection("appointments").updateOne(
    { _id: new ObjectId(id) },
    { $set: { status } }
  );

  return NextResponse.json({ message: "Updated" });
}