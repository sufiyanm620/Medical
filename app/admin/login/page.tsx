"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    const res = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("userEmail", data.email);

      alert("Login successful 💙");

      window.location.href = "/my-appointments";
    } else {
      alert(data.error);
    }
  };

  return (
    <main style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      <div style={{
        border:"1px solid #555",
        padding:"40px",
        borderRadius:"10px",
        width:"320px"
      }}>
        <h2>Patient Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:10,marginTop:15}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:10,marginTop:15}}
        />

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:10,
            marginTop:20,
            background:"#0070f3",
            color:"white",
            border:"none",
            borderRadius:5
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}