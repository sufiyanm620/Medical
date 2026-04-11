import Link from "next/link";

type DoctorProps = {
  name: string;
  specialization: string;
  experience: number;
};

export default function DoctorCard({
  name,
  specialization,
  experience,
}: DoctorProps) {

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>{name}</h3>

      <p>{specialization}</p>

      <p>Experience: {experience} years</p>

      <Link href={`/doctors/${slug}`}>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          View Profile
        </button>
      </Link>
    </div>
  );
}