import { Search, Code, Palette, Terminal, Globe, Cpu, BarChart, ArrowRight } from "lucide-react";

export default function Explore() {
  const categories = [
    { name: "Web Development", icon: <Code />, count: "120+ Swappers", color: "bg-blue-500/20 text-blue-400" },
    { name: "UI/UX Design", icon: <Palette />, count: "80+ Swappers", color: "bg-pink-500/20 text-pink-400" },
    { name: "Data Science", icon: <BarChart />, count: "45+ Swappers", color: "bg-green-500/20 text-green-400" },
    { name: "Cybersecurity", icon: <Terminal />, count: "30+ Swappers", color: "bg-purple-500/20 text-purple-400" },
    { name: "Cloud Computing", icon: <Cpu />, count: "25+ Swappers", color: "bg-orange-500/20 text-orange-400" },
    { name: "Language Exchange", icon: <Globe />, count: "100+ Swappers", color: "bg-cyan-500/20 text-cyan-400" },
  ];

  return (
    <div className="bg-[#0a0a0c] min-h-screen text-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">What do you want to learn?</h1>
          <p className="text-slate-400 mb-8">Browse categories or search for specific technologies.</p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search for 'React', 'DSA', or 'French'..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-lg"
            />
          </div>
        </header>

        {/* CATEGORIES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all cursor-pointer relative overflow-hidden"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
              <p className="text-slate-400 text-sm">{cat.count}</p>
              
              <div className="absolute right-8 bottom-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                <ArrowRight className="text-purple-400" />
              </div>
            </div>
          ))}
        </div>

        {/* TRENDING SECTION */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Trending Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "Python", "Solidity", "Tailwind CSS", "Figma", "Machine Learning", "System Design"].map((skill) => (
              <span key={skill} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-purple-500 transition-colors cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}