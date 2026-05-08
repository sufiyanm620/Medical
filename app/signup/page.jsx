"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: data.message || "Account created successfully. You can log in now.",
        });
        setForm({ name: "", email: "", password: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "We could not create your account right now.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong while creating your account.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-shell glass-card">
        <div className="auth-intro">
          <p className="eyebrow">Patient onboarding</p>
          <h1>Create your care profile in minutes.</h1>
          <p className="auth-copy">
            Join MediMeet to discover specialists, manage appointments, and
            keep your healthcare journey organized in one calm place.
          </p>

          <div className="auth-feature-list">
            <div className="auth-feature-item">
              <strong>Simple setup</strong>
              <span>Just the essentials to get you booking quickly.</span>
            </div>
            <div className="auth-feature-item">
              <strong>Trusted experience</strong>
              <span>Designed to feel clear, credible, and easy to use.</span>
            </div>
            <div className="auth-feature-item">
              <strong>Ready for appointments</strong>
              <span>Move from signup to doctor discovery without friction.</span>
            </div>
          </div>
        </div>

        <div className="auth-form-card">
          <div className="auth-form-header">
            <span className="form-kicker">Start here</span>
            <h2>Patient Signup</h2>
            <p>Use your details below to create a new MediMeet account.</p>
          </div>

          <form className="auth-form" onSubmit={handleSignup}>
            <label className="auth-field">
              <span>Full name</span>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="auth-field">
              <span>Email address</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="auth-field">
              <span>Password</span>
              <input
                name="password"
                type="password"
                placeholder="Create a strong password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </label>

            {status.message ? (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            ) : null}

            <button type="submit" className="primary-button auth-submit" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
