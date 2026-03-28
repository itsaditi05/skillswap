import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Code, BookOpen, Users, Star, ArrowUpRight } from "lucide-react"; // Using Lucide for better icons

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0c] text-slate-200 min-h-screen font-sans selection:bg-purple-500/30">
      
      {/* 🌌 AMBIENT BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />

      {/* 💎 NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-lg rotate-12" />
            <h1 className="text-xl font-bold tracking-tight text-white">SkillSwap</h1>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#community" 
            onClick={()=>navigate("/community")}
            className="hover:text-white transition">Community</a>
          </div>

         <button
  onClick={() => navigate("/login")}
  className="group relative px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-purple-500/40"
>
  <div className="flex items-center gap-2">
    <span>Get Started</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </div>
  {/* Subtle gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
</button>
        </div>
      </nav>

      {/* 🚀 HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Over 200 swaps happening today
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
            Trade your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Knowledge.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The currency here isn't money—it's mastery. Teach React, learn DSA. Build your network without breaking your bank.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/matchmaking")}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all flex items-center justify-center gap-2"
            >
              Start Swapping <Zap size={18} fill="white" />
            </button>
            <button  
            onClick={()=> navigate("/explore")}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-lg transition-all">
              Browse Skills
            </button>
          </div>
        </div>
      </section>

      {/* 💡 THE "BENTO" HOW IT WORKS */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Your path to mastery</h2>
        <div className="grid md:grid-cols-12 gap-4">
          
          <div className="md:col-span-8 bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white/[0.07] transition-all group">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white mb-4">List what you know</h3>
              <p className="text-slate-400">Whether it's competitive programming, UI design, or playing the guitar—your skill is someone else's dream.</p>
            </div>
            <div className="mt-8 flex gap-2 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
               <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs">React.js</span>
               <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs">DSA</span>
               <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs">Figma</span>
            </div>
          </div>

          <div className="md:col-span-4 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-[2rem] text-white flex flex-col justify-between shadow-xl">
            <Star size={40} className="mb-4 text-purple-200" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Earn Credits</h3>
              <p className="text-purple-100 text-sm opacity-90">Teach sessions to build up your "Knowledge Balance."</p>
            </div>
          </div>

          <div className="md:col-span-4 bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.07] transition-all">
            <Users size={32} className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Find a Match</h3>
            <p className="text-slate-400 text-sm">Our algorithm pairs you with students who want exactly what you offer.</p>
          </div>

          <div className="md:col-span-8 bg-slate-100 p-8 rounded-[2rem] text-black flex items-center justify-between overflow-hidden">
            <div>
              <h3 className="text-2xl font-bold mb-2">Build your Network</h3>
              <p className="text-slate-600">Join a global community of curious minds.</p>
            </div>
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white -rotate-12 translate-x-4">
               <ArrowUpRight size={40} />
            </div>
          </div>
        </div>
      </section>

      {/* ✨ LIVE STATUS BAR (Visual Polish) */}
      <section className="bg-white/5 py-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex items-center gap-8">
                <p className="text-sm font-mono text-slate-500">
                  <span className="text-green-400">SUCCESS:</span> Arjun swapped <span className="text-white font-bold">Node.js</span> for <span className="text-white font-bold">Python</span>
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <p className="text-sm font-mono text-slate-500">
                  <span className="text-purple-400">PENDING:</span> Sarah is looking for <span className="text-white font-bold">SQL</span>
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 FOOTER CTA */}
      <section className="px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-6">Stop searching, start swapping.</h2>
          <p className="text-slate-400 mb-10">Join 1,200+ students already upgrading their careers.</p>
          <button 
          onClick={()=>navigate("/community")}
          className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Join the Community
          </button>
        </div>
      </section>
    </div>
  );
}