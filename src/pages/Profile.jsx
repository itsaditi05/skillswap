import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">

      {/* 🔥 SIDEBAR */}
      <div className="w-64 bg-slate-950 p-6 flex flex-col justify-between">

        <div>
          <div className="mb-6">
            <h2 className="font-semibold">Alex Rivera</h2>
            <p className="text-sm text-gray-400">Level 8 Learner</p>
          </div>

          <nav className="space-y-4">
            <p onClick={() => navigate("/dashboard")} className="cursor-pointer text-gray-400">Dashboard</p>
            <p onClick={() => navigate("/match")} className="cursor-pointer text-gray-400">Matches</p>
            <p onClick={() => navigate("/chat")} className="cursor-pointer text-gray-400">Chat</p>
            <p className="text-purple-400 cursor-pointer">Profile</p>
            <p onClick={() => navigate("/explore")} className="cursor-pointer text-gray-400">Explore</p>
          </nav>
        </div>

        <button className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 rounded-lg">
          Pro Upgrade
        </button>
      </div>

      {/* 🚀 MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* TOP PROFILE CARD */}
        <div className="bg-gray-800 p-6 rounded-2xl flex justify-between items-center mb-6">
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 bg-gray-700 rounded-xl"></div>

            <div>
              <h1 className="text-2xl font-bold">Alex Rivera</h1>
              <p className="text-gray-400">Stanford University</p>

              <div className="flex gap-6 mt-2 text-sm">
                <span>12 Swaps</span>
                <span>⭐ 4.9 Rating</span>
                <span>98% Response</span>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
            Swap Skills
          </button>
        </div>

        {/* SKILLS */}
        <div className="grid grid-cols-2 gap-6 mb-6">

          {/* TEACHES */}
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-lg mb-4">Teaches</h2>

            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Data Analysis</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">UI Design</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">SQL</span>
            </div>
          </div>

          {/* LEARNS */}
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h2 className="text-lg mb-4">Wants to Learn</h2>

            <div className="flex flex-wrap gap-2">
              <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">Motion Graphics</span>
              <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">French</span>
            </div>
          </div>

        </div>

        {/* ACHIEVEMENTS */}
        <div className="mb-6">
          <h2 className="text-xl mb-4">Achievements</h2>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-xl text-center">⚡ Fast Responder</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">🏅 Top Mentor</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">⭐ 5-Star Teacher</div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">🤝 Skill Swap Pro</div>
          </div>
        </div>

        {/* FEEDBACK */}
        <div>
          <h2 className="text-xl mb-4">Community Feedback</h2>

          <div className="space-y-4">

            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-semibold">Maya Chen</p>
              <p className="text-gray-400 text-sm">
                Amazing Python teacher! Explained everything clearly.
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-semibold">Jordan Smith</p>
              <p className="text-gray-400 text-sm">
                Great mentor, helped a lot with UI concepts.
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl">
              <p className="font-semibold">Elena Rodriguez</p>
              <p className="text-gray-400 text-sm">
                Very clear explanations, highly recommended!
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}