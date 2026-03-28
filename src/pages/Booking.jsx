import { useState } from "react";

export default function Booking() {
  const [selectedTime, setSelectedTime] = useState("02:00 PM");

  const times = [
    "09:00 AM",
    "10:30 AM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM",
    "06:30 PM",
    "08:00 PM",
    "09:30 PM",
  ];

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">

      {/* 🔥 SIDEBAR */}
      <div className="w-64 bg-slate-950 p-6">
        <h1 className="text-xl font-bold text-purple-400 mb-6">SkillSwap</h1>

        <nav className="space-y-4">
          <p className="text-gray-400">Home</p>
          <p className="text-purple-400">Schedule</p>
          <p className="text-gray-400">Connections</p>
          <p className="text-gray-400">Analytics</p>
        </nav>
      </div>

      {/* 🚀 MAIN */}
      <div className="flex-1 p-8 grid grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-2">

          <h1 className="text-3xl font-bold mb-2">Book Your Session</h1>
          <p className="text-gray-400 mb-8">
            Choose a time slot that fits your schedule
          </p>

          {/* CALENDAR */}
          <div className="bg-gray-800 p-6 rounded-2xl mb-6">
            <h2 className="text-lg mb-4">October 2024</h2>

            <div className="grid grid-cols-7 gap-2 text-center text-gray-400">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
                <p key={d}>{d}</p>
              ))}

              {[...Array(31)].map((_, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg cursor-pointer ${
                    i === 11
                      ? "bg-purple-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* TIME SLOTS */}
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-lg mb-4">Available Slots</h2>

            <div className="grid grid-cols-4 gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-xl ${
                    selectedTime === time
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-800 p-6 rounded-2xl flex flex-col justify-between">

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Elena Rodriguez
            </h2>

            <p className="text-gray-400 mb-2">Senior Product Designer</p>
            <p className="text-sm text-gray-400">⭐ 4.9 (128 sessions)</p>

            <div className="mt-6 space-y-2">
              <p>Date: Oct 12</p>
              <p>Time: {selectedTime}</p>
              <p>Format: 1-on-1 Video Call</p>
            </div>

            <div className="mt-6 bg-slate-900 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Exchange Rate</p>
              <h2 className="text-lg font-semibold">1 Hour = 1 Credit</h2>
              <p className="mt-2">Total Cost: 1 Credit</p>
            </div>
          </div>

          <button className="mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl">
            Confirm Booking →
          </button>
        </div>

      </div>
    </div>
  );
}