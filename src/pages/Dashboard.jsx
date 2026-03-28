import { useNavigate } from "react-router-dom";
import { Zap, BookOpen, MessageSquare, Calendar, Star, TrendingUp, ArrowUpRight } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0c] min-h-screen text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* 🏆 WELCOME HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Welcome back, Aditi! 👋</h1>
            <p className="text-slate-500 mt-2">You have 2 new swap requests and a session in 3 hours.</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
              <Zap size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white font-bold">12.5 Credits</span>
            </div>
            {/* Back button to Home for testing */}
            <button 
              onClick={() => navigate("/")}
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition"
            >
              Home
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 📊 LEFT COLUMN: STATS & QUICK ACTIONS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* FEATURED: THE MATCH OF THE DAY */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-700 p-8 rounded-[2.5rem] text-white shadow-2xl">
              <div className="relative z-10">
                <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Perfect Match</span>
                <h2 className="text-3xl font-bold mt-4 mb-2">Swap React for DSA?</h2>
                <p className="text-purple-100 mb-6 max-w-sm">Rahul S. is a 5-star DSA expert looking for someone to teach him React basics.</p>
                <button 
                  onClick={() => navigate("/matchmaking")}
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2"
                >
                  View Proposal <ArrowUpRight size={18} />
                </button>
              </div>
              <TrendingUp className="absolute -right-8 -bottom-8 w-64 h-64 text-white/10 -rotate-12" />
            </div>

            {/* UPCOMING SESSIONS */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-purple-400" /> Upcoming Sessions
              </h3>
              <div className="space-y-4">
                {[
                  { user: "Ishaan K.", skill: "System Design", time: "Today, 6:00 PM", status: "Confirmed" },
                  { user: "Megha W.", skill: "Tailwind CSS", time: "Tomorrow, 11:00 AM", status: "Pending" }
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/[0.08] transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-xs">{session.user[0]}</div>
                      <div>
                        <p className="text-white font-semibold">{session.user}</p>
                        <p className="text-xs text-slate-500">{session.skill}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-white font-medium">{session.time}</p>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${session.status === 'Confirmed' ? 'text-green-400' : 'text-yellow-500'}`}>{session.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ⚡ RIGHT COLUMN: NOTIFICATIONS & SKILLS */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
              <h3 className="text-lg font-bold text-white mb-4">Your Skills</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Teaching</span>
                  <span className="text-purple-400 font-bold">React, Figma</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Learning</span>
                  <span className="text-blue-400 font-bold">DSA, Node.js</span>
                </div>
              </div>
              <button 
                onClick={() => navigate("/profile")}
                className="w-full mt-6 py-3 border border-dashed border-white/20 rounded-xl text-xs hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-slate-400"
              >
                + Edit Skills
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Star size={18} className="text-yellow-500" /> Recent Feedback
              </h3>
              <p className="text-sm italic text-slate-400">"Great teacher! Explained hooks perfectly."</p>
              <p className="text-xs text-slate-500 mt-2">— Sahil P.</p>
            </div>

            {/* QUICK LINK TO CHAT */}
            <button 
              onClick={() => navigate("/chat")}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition group"
            >
              <MessageSquare size={18} className="group-hover:text-purple-400" />
              <span>Open Messages</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}