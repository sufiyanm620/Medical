"use client";

import { useEffect, useState } from "react";

interface Appointment {
  _id: string;
  doctor: string;
  name: string;
  email: string;
  date: string;
  time: string;
  symptoms: string;
  status: string;
}

export default function MyAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  /* =========================
     CHECK LOGIN
  ========================= */
  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (!email) {
      window.location.href = "/login";
    } else {
      fetchAppointments(email);
    }
  }, []);

  /* =========================
     FETCH APPOINTMENTS
  ========================= */
  const fetchAppointments = async (email: string) => {
    const res = await fetch(`/api/appointments?email=${email}`);
    const data = await res.json();
    setAppointments(data);
  };

  /* =========================
     CANCEL APPOINTMENT
  ========================= */
  const cancelAppointment = async (id: string) => {
    if (!confirm("Cancel this appointment?")) return;

    await fetch("/api/appointments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        status: "cancelled",
      }),
    });

    const email = localStorage.getItem("userEmail");
    if (email) fetchAppointments(email);
  };

  /* =========================
     LOGOUT
  ========================= */
  const logout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/login";
  };

  return (
    <main style={{ padding: "40px" }}>
      <h1>My Appointments</h1>

      <button
        onClick={logout}
        style={{
          position: "absolute",
          right: "40px",
          top: "40px",
          background: "crimson",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      {appointments.length === 0 && <p>No appointments found.</p>}

      {appointments.map((a) => (
        <div
          key={a._id}
          style={{
            border: "1px solid #555",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <p><b>Doctor:</b> {a.doctor}</p>
          <p><b>Date:</b> {a.date}</p>
          <p><b>Time:</b> {a.time}</p>
          <p><b>Symptoms:</b> {a.symptoms}</p>
          <p><b>Status:</b> {a.status}</p>

          {a.status !== "cancelled" && (
            <button
              onClick={() => cancelAppointment(a._id)}
              style={{
                marginTop: "10px",
                background: "red",
                color: "white",
                padding: "6px 12px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Cancel Appointment
            </button>
          )}
        </div>
      ))}
    </main>
  );
}