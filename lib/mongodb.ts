import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

/* =========================
GLOBAL CACHE (for Next.js dev)
========================= */
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const clientPromise: Promise<MongoClient> =
  global._mongoClientPromise ?? new MongoClient(uri).connect();

global._mongoClientPromise = clientPromise;

/* =========================
CONNECT FUNCTION
========================= */
export async function connectDB() {
  const client = await clientPromise;
  return client.db("medical"); // your DB name
}
