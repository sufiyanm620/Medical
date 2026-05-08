"use client";

import Sidebar from "../../components/Sidebar";

export default function Appointments() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          All Appointments
        </h1>

        <div className="bg-white rounded-xl shadow p-5">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th>#</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Date</th>
                <th>Fees</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td>1</td>
                <td>Avinash</td>
                <td>31</td>
                <td>5 Oct</td>
                <td>$50</td>
                <td className="text-green-500">Completed</td>
              </tr>

              <tr className="border-t">
                <td>2</td>
                <td>GreatStack</td>
                <td>24</td>
                <td>26 Sep</td>
                <td>$40</td>
                <td className="text-red-500">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
