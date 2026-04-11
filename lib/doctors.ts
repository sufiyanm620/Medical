export type Doctor = {
  slug: string;
  name: string;
  specialization: string;
  experience: number;
  location: string;
  availability: string;
  rating: number;
  patients: string;
  focus: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-rahul-sharma",
    name: "Dr Rahul Sharma",
    specialization: "Cardiology",
    experience: 14,
    location: "New Delhi",
    availability: "Available today",
    rating: 4.9,
    patients: "1.8k+ patients",
    focus: "Heart health, preventive screenings, and hypertension management.",
  },
  {
    slug: "dr-priya-singh",
    name: "Dr Priya Singh",
    specialization: "Dentistry",
    experience: 10,
    location: "Lucknow",
    availability: "Next slot at 11:30 AM",
    rating: 4.8,
    patients: "1.2k+ patients",
    focus: "Family dental care, aligners, and painless restorative treatment.",
  },
  {
    slug: "dr-amit-verma",
    name: "Dr Amit Verma",
    specialization: "Dermatology",
    experience: 11,
    location: "Jaipur",
    availability: "Available tomorrow",
    rating: 4.7,
    patients: "900+ patients",
    focus: "Skin allergies, acne treatment, and long-term skin wellness plans.",
  },
  {
    slug: "dr-neha-menon",
    name: "Dr Neha Menon",
    specialization: "Pediatrics",
    experience: 13,
    location: "Bengaluru",
    availability: "Next slot at 1:15 PM",
    rating: 4.9,
    patients: "2.1k+ patients",
    focus: "Child growth, fever care, vaccinations, and parent guidance.",
  },
  {
    slug: "dr-arjun-nair",
    name: "Dr Arjun Nair",
    specialization: "Orthopedics",
    experience: 16,
    location: "Kochi",
    availability: "Available today",
    rating: 4.8,
    patients: "1.5k+ patients",
    focus: "Sports injury recovery, knee pain, and joint mobility treatment.",
  },
  {
    slug: "dr-sana-khan",
    name: "Dr Sana Khan",
    specialization: "Gynecology",
    experience: 12,
    location: "Hyderabad",
    availability: "Next slot at 4:00 PM",
    rating: 4.9,
    patients: "1.7k+ patients",
    focus: "Women’s wellness, PCOS support, and prenatal consultations.",
  },
  {
    slug: "dr-vikram-joshi",
    name: "Dr Vikram Joshi",
    specialization: "Neurology",
    experience: 18,
    location: "Pune",
    availability: "Available in 2 days",
    rating: 4.8,
    patients: "1.1k+ patients",
    focus: "Migraine care, seizure evaluation, and nerve disorder assessment.",
  },
  {
    slug: "dr-meera-iyer",
    name: "Dr Meera Iyer",
    specialization: "Ophthalmology",
    experience: 9,
    location: "Chennai",
    availability: "Next slot at 10:45 AM",
    rating: 4.7,
    patients: "850+ patients",
    focus: "Vision exams, dry eye treatment, and cataract follow-up care.",
  },
  {
    slug: "dr-karan-malhotra",
    name: "Dr Karan Malhotra",
    specialization: "Psychiatry",
    experience: 15,
    location: "Mumbai",
    availability: "Available tomorrow",
    rating: 4.8,
    patients: "1.3k+ patients",
    focus: "Anxiety, sleep concerns, and long-term mental health support.",
  },
  {
    slug: "dr-ananya-roy",
    name: "Dr Ananya Roy",
    specialization: "ENT",
    experience: 8,
    location: "Kolkata",
    availability: "Next slot at 6:15 PM",
    rating: 4.6,
    patients: "760+ patients",
    focus: "Sinus issues, throat infections, and hearing health evaluation.",
  },
  {
    slug: "dr-rohit-kapoor",
    name: "Dr Rohit Kapoor",
    specialization: "General Medicine",
    experience: 17,
    location: "Gurugram",
    availability: "Available today",
    rating: 4.9,
    patients: "2.4k+ patients",
    focus: "Primary care, chronic condition management, and health checkups.",
  },
  {
    slug: "dr-ishita-das",
    name: "Dr Ishita Das",
    specialization: "Endocrinology",
    experience: 10,
    location: "Bhubaneswar",
    availability: "Available in 2 days",
    rating: 4.8,
    patients: "980+ patients",
    focus: "Diabetes support, thyroid care, and metabolic health planning.",
  },
];

export const specialtyCounts = doctors.reduce<Record<string, number>>((acc, doctor) => {
  acc[doctor.specialization] = (acc[doctor.specialization] || 0) + 1;
  return acc;
}, {});
