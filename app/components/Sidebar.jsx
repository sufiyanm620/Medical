"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/doctor-dashboard" },
    { name: "Appointments", path: "/doctor-appointments" },
    { name: "Profile", path: "/doctor-profile" },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md p-5">
      <h1 className="text-xl font-bold text-blue-600 mb-8">
        Prescripto
      </h1>

      <div className="flex flex-col gap-3">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`p-3 rounded-lg ${
              pathname === item.path
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}