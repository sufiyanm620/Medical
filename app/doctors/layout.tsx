import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctors | MediMeet",
  description: "Browse specialists and book appointments with MediMeet.",
};

export default function DoctorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
