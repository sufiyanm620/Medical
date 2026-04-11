"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#1e40af",
        color: "white",
        padding: "15px 30px",
        zIndex: 1, // low rakha hai taaki block na kare
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>MediMeet</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/">Home</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </header>
  );
}