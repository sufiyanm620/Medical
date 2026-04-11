import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "MediMeet",
  description: "Book appointments with trusted doctors through a calm, modern experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable}`}>
        <div className="site-shell">
          <header className="site-header">
            <div className="site-nav">
              <Link href="/" className="brand-mark">
                <span className="brand-dot" />
                MediMeet
              </Link>

              <nav className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/doctors">Doctors</Link>
                <Link href="/my-appointments">Appointments</Link>
                <Link href="/login" className="nav-cta">
                  Login
                </Link>
              </nav>
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
