"use client";

import { useState } from "react";
import Link from "next/link";
import { doctors, specialtyCounts } from "../../lib/doctors";

export default function DoctorsPage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(search.toLowerCase()) ||
    doctor.location.toLowerCase().includes(search.toLowerCase())
  );

  const topSpecialties = Object.entries(specialtyCounts).slice(0, 6);

  return (
    <main className="doctors-page">
      <section className="doctors-hero">
        <div className="doctors-hero-copy">
          <p className="eyebrow">Doctor discovery</p>
          <h1>Find specialists across more fields, faster.</h1>
          <p className="hero-text">
            Explore a broader network of doctors by specialty, city, and care
            focus, then move straight into profile review and appointment
            booking.
          </p>
        </div>

        <div className="doctors-summary glass-card">
          <div>
            <strong>{doctors.length}</strong>
            <span>specialists available</span>
          </div>
          <div>
            <strong>{Object.keys(specialtyCounts).length}</strong>
            <span>medical fields covered</span>
          </div>
          <div>
            <strong>4.8/5</strong>
            <span>average patient rating</span>
          </div>
        </div>
      </section>

      <section className="specialty-strip">
        {topSpecialties.map(([specialty, count]) => (
          <div key={specialty} className="specialty-pill">
            <strong>{specialty}</strong>
            <span>{count} doctor{count > 1 ? "s" : ""}</span>
          </div>
        ))}
      </section>

      <section className="doctors-directory">
        <div className="doctors-toolbar">
          <div>
            <h2>Find Doctors</h2>
            <p>
              Search by doctor name, specialty, or city to narrow the list.
            </p>
          </div>

          <label className="directory-search">
            <span className="sr-only">Search doctors</span>
            <input
              placeholder="Search by name, specialty, or city"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className="directory-results">
          {filteredDoctors.map((doctor) => (
            <article key={doctor.slug} className="doctor-directory-card glass-card">
              <div className="doctor-card-main">
                <div className="doctor-avatar" aria-hidden="true">
                  {doctor.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}
                </div>

                <div className="doctor-copy">
                  <div className="doctor-card-topline">
                    <span className="doctor-specialty-tag">{doctor.specialization}</span>
                    <span className="doctor-availability">{doctor.availability}</span>
                  </div>

                  <h3>{doctor.name}</h3>
                  <p>{doctor.focus}</p>

                  <div className="doctor-meta">
                    <span>{doctor.location}</span>
                    <span>{doctor.experience} years experience</span>
                    <span>{doctor.patients}</span>
                    <span>{doctor.rating}/5 rating</span>
                  </div>
                </div>
              </div>

              <Link href={`/doctors/${doctor.slug}`} className="secondary-button doctor-link">
                View Profile
              </Link>
            </article>
          ))}

          {filteredDoctors.length === 0 ? (
            <div className="directory-empty glass-card">
              <h3>No doctors matched your search.</h3>
              <p>Try another specialty, city, or doctor name.</p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
