import Link from "next/link";

const features = [
  {
    title: "Verified specialists",
    text: "Browse trusted doctors across cardiology, pediatrics, dermatology, and more.",
  },
  {
    title: "Fast appointment flow",
    text: "Book in minutes with a guided experience designed to feel calm and clear.",
  },
  {
    title: "Smart patient support",
    text: "Track appointments, prepare before visits, and stay organized after care.",
  },
];

const stats = [
  { value: "120+", label: "specialists onboarded" },
  { value: "4.9/5", label: "average patient rating" },
  { value: "24/7", label: "booking availability" },
];

export default function Home() {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Modern healthcare booking</p>
          <h1>Feel cared for before you even enter the clinic.</h1>
          <p className="hero-text">
            MediMeet makes discovering doctors and booking appointments feel
            smooth, trustworthy, and beautifully simple.
          </p>

          <div className="hero-actions">
            <Link href="/doctors" className="primary-button">
              Explore Doctors
            </Link>
            <Link href="/signup" className="secondary-button">
              Create Account
            </Link>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-panel glass-card">
            <div className="panel-badge">Live today</div>
            <h3>Find your next appointment</h3>
            <p>
              Personalized discovery, elegant scheduling, and a patient-first
              experience from start to finish.
            </p>

            <div className="mini-schedule">
              <div>
                <span>Dermatology</span>
                <strong>09:30 AM</strong>
              </div>
              <div>
                <span>Cardiology</span>
                <strong>11:15 AM</strong>
              </div>
              <div>
                <span>Pediatrics</span>
                <strong>02:45 PM</strong>
              </div>
            </div>
          </div>

          <div className="floating-note glass-card">
            <span>Trusted by patients</span>
            <strong>Seamless care discovery</strong>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <p className="eyebrow">Why patients choose MediMeet</p>
          <h2>A homepage that feels premium, calm, and credible.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card glass-card">
              <div className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
