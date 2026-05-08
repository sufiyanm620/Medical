"use client";

import Image from "next/image";
import Sidebar from "../../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="bg-white p-6 rounded-xl shadow max-w-lg">
          <Image
            src="/doctor.png"
            alt="Dr Richard James"
            width={160}
            height={160}
            className="w-40 rounded-lg mb-4"
          />

          <h1 className="text-xl font-bold">
            Dr Richard James
          </h1>

          <p className="text-gray-500 mb-4">
            MBBS - General Physician
          </p>

          <p className="text-gray-600 mb-4">
            Experienced doctor focused on preventive care and
            treatment strategies.
          </p>

          <p className="mb-2">
            <b>Fees:</b> $50
          </p>

          <p className="mb-2">
            <b>Address:</b> 24 Main Street
          </p>

          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
