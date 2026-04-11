"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function BookPage() {
  const params = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    reason: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          doctor: params.slug,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Appointment booked successfully ✅");
        setForm({
          name: "",
          email: "",
          date: "",
          time: "",
          reason: "",
        });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex justify-center items-center px-4">
      
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Book Appointment 🏥
        </h1>

        <p className="text-gray-600 mb-4">
          Doctor:{" "}
          <span className="font-semibold capitalize">
            {params.slug}
          </span>
        </p>

        {success && (
          <p className="text-green-600 mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <textarea
            name="reason"
            placeholder="Reason for visit"
            value={form.reason}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Appointment
          </button>

        </form>

      </div>
    </div>
  );
}