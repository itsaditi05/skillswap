import { Search, Zap, MessageSquare, BookOpen, Star, Filter } from "lucide-react";

export default function Dashboard() {
  // Mock data for the matches
  const matches = [
    { id: 1, name: "Arjun Mehta", gives: "DSA", wants: "React", rating: 4.9, avatar: "AM" },
    { id: 2, name: "Sneha Rao", gives: "UI Design", wants: "Node.js", rating: 4.8, avatar: "SR" },
    { id: 3, name: "Rohan Das", gives: "Python", wants: "DSA", rating: 4.7, avatar: "RD" },
  ];

  return (
    <div className="bg-[#0a0a0c] min-h-screen text-slate-200 flex">
      
      {/* 🛠️ SIDEBAR */}
      <aside className="w-64 border-r border-white/5 p-6 hidden lg:flex flex-col gap-8">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
           <div className="w-6 h-6 bg-purple-600 rounded" /> SkillSwap
        </h2>
        <nav className="flex flex-col gap-2">
          {['Explore', 'My Swaps', 'Messages', 'Profile'].map((item) => (
            <button key={item} className="text-left px-4 py-2 rounded-xl hover:bg-white/5 hover:text-white transition-all">
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* 🚀 MAIN CONTENT */}
      <main className="flex-1 p-8">
        
        {/* HEADER & SEARCH */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white">Find your Match</h1>
            <p className="text-slate-400">Showing experts who want to learn what you know.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search skills (e.g. Figma, SQL...)" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>
        </header>

        {/* STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 p-6 rounded-3xl">
            <p className="text-sm text-purple-300 font-medium mb-1">Your Balance</p>
            <h3 className="text-3xl font-bold text-white">12.5 <span className="text-sm font-normal text-slate-400 uppercase tracking-widest">Credits</span></h3>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
            <p className="text-sm text-slate-400 mb-1">Active Swaps</p>
            <h3 className="text-3xl font-bold text-white">03</h3>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
            <p className="text-sm text-slate-400 mb-1">Hours Taught</p>
            <h3 className="text-3xl font-bold text-white">48.2</h3>
          </div>
        </div>

        {/* MATCHES GRID */}
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Zap size={20} className="text-yellow-400 fill-yellow-400" /> Top Matches for you
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div key={match.id} className="group relative bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/[0.08] transition-all overflow-hidden">
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center font-bold text-white">
                  {match.avatar}
                </div>
                <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold">{match.rating}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-4">{match.name}</h3>

              {/* THE SWAP VISUALIZER */}
              <div className="flex items-center justify-between bg-black/20 p-4 rounded-2xl border border-white/5 mb-6">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-tighter text-slate-500 mb-1">Gives</p>
                  <p className="text-sm font-bold text-green-400">{match.gives}</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-tighter text-slate-500 mb-1">Wants</p>
                  <p className="text-sm font-bold text-purple-400">{match.wants}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-white text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-sm">
                  Propose Swap
                </button>
                <button className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-all">
                  <MessageSquare size={18} />
                </button>
              </div>

              {/* HOVER GLOW EFFECT */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}