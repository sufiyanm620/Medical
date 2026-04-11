import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors } from "../../../lib/doctors";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DoctorProfile({ params }: Params) {
  const { slug } = await params;
  const doctor = doctors.find((entry) => entry.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <main className="doctor-profile-page">
      <section className="doctor-profile-shell glass-card">
        <div className="doctor-profile-hero">
          <span className="doctor-specialty-tag">{doctor.specialization}</span>
          <h1>{doctor.name}</h1>
          <p>
            {doctor.focus}
          </p>

          <div className="doctor-profile-meta">
            <div>
              <strong>{doctor.experience} yrs</strong>
              <span>clinical experience</span>
            </div>
            <div>
              <strong>{doctor.rating}/5</strong>
              <span>patient rating</span>
            </div>
            <div>
              <strong>{doctor.location}</strong>
              <span>consultation city</span>
            </div>
            <div>
              <strong>{doctor.availability}</strong>
              <span>next availability</span>
            </div>
          </div>
        </div>

        <div className="doctor-profile-panel">
          <p className="eyebrow">Why patients book</p>
          <h2>Care that feels focused and easy to access.</h2>
          <p className="doctor-profile-text">
            {doctor.name} supports {doctor.specialization.toLowerCase()} needs with
            a practical, patient-first approach and a strong record across{" "}
            {doctor.patients}.
          </p>

          <div className="doctor-profile-actions">
            <Link href={`/doctors/${slug}/book`} className="primary-button">
              Book Appointment
            </Link>
            <Link href="/doctors" className="secondary-button">
              Back to Directory
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
