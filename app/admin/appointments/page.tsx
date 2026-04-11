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

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  /* =========================
     AUTH CHECK
  ========================= */
  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  /* =========================
     FETCH APPOINTMENTS
  ========================= */
  const fetchAppointments = async () => {
    const res = await fetch("/api/appointments");
    const data = await res.json();
    setAppointments(data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  /* =========================
     DELETE APPOINTMENT
  ========================= */
  const deleteAppointment = async (id: string) => {
    await fetch("/api/appointments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchAppointments();
  };

  /* =========================
     UPDATE STATUS
  ========================= */
  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/appointments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    fetchAppointments();
  };

  /* =========================
     LOGOUT FUNCTION (HERE)
  ========================= */
  const logout = () => {
    localStorage.removeItem("adminToken");

    document.cookie =
      "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    window.location.href = "/login";
  };

  return (
    <main style={{ padding: "40px" }}>
      <h1>Admin — All Appointments</h1>

      {/* LOGOUT BUTTON */}
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

      {appointments.length === 0 && <p>No appointments yet.</p>}

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
          <p><b>Patient:</b> {a.name}</p>
          <p><b>Email:</b> {a.email}</p>
          <p><b>Date:</b> {a.date}</p>
          <p><b>Time:</b> {a.time}</p>
          <p><b>Symptoms:</b> {a.symptoms}</p>

          {/* STATUS BADGE */}
          <p>
            <b>Status:</b>{" "}
            <span
              style={{
                padding: "4px 10px",
                borderRadius: "20px",
                background:
                  a.status === "approved"
                    ? "green"
                    : a.status === "rejected"
                    ? "crimson"
                    : "gray",
                color: "white",
                fontSize: "12px",
              }}
            >
              {a.status}
            </span>
          </p>

          {/* APPROVE */}
          <button
            onClick={() => updateStatus(a._id, "approved")}
            style={{
              marginTop: "10px",
              marginRight: "10px",
              background: "green",
              color: "white",
              padding: "6px 12px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Approve
          </button>

          {/* REJECT */}
          <button
            onClick={() => updateStatus(a._id, "rejected")}
            style={{
              marginTop: "10px",
              marginRight: "10px",
              background: "orange",
              color: "white",
              padding: "6px 12px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Reject
          </button>

          {/* DELETE */}
          <button
            onClick={() => deleteAppointment(a._id)}
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
            Delete Appointment
          </button>
        </div>
      ))}
    </main>
  );
}