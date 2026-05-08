"use client";

import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-end mb-6">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Earnings</h2>
            <p className="text-2xl font-bold">$80</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Appointments</h2>
            <p className="text-2xl font-bold">4</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Patients</h2>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>

        {/* Latest bookings */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">
            Latest Bookings
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Avinash Kr</p>
              <span className="text-green-500">Completed</span>
            </div>

            <div className="flex justify-between">
              <p>GreatStack</p>
              <span className="text-red-500">Cancelled</span>
            </div>

            <div className="flex justify-between">
              <p>GreatStack</p>
              <span className="text-green-500">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
