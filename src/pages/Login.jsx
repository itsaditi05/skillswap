import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, Globe, Zap, User, BookOpen } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle state

 const handleSubmit = (e) => {
  e.preventDefault();

  // 1. Set the key EXACTLY as it appears in App.jsx
  localStorage.setItem("isLoggedIn", "true");

  // 2. Trigger a custom event (Optional but helps React notice the change)
  window.dispatchEvent(new Event("storage"));

  console.log("Login successful, redirecting...");

  // 3. Move to dashboard
  navigate("/dashboard");
};
  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* 🌌 BACKGROUND SHAPES */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full" />

      <div className="w-full max-w-md relative z-10">
        
        {/* LOGO AREA */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-2xl rotate-12 mb-4 shadow-xl shadow-purple-500/20">
            <Zap size={32} className="text-white fill-white" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            {isLogin ? "Join SkillSwap" : "Create Account"}
          </h1>
          <p className="text-slate-400 mt-2">
            {isLogin ? "Start trading knowledge today." : "Tell us what you want to learn."}
          </p>
        </div>

        {/* 🏢 FORM CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* NAME INPUT (Only shows for Create Account) */}
            {!isLogin && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2 mb-2 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Aditi Upadhyay"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            )}

            {/* EMAIL INPUT */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase ml-2 mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input 
                  type="email" 
                  required
                  placeholder="name@university.edu"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* SKILL SELECTION (Only shows for Create Account) */}
            {!isLogin && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <label className="text-xs font-bold text-slate-500 uppercase ml-2 mb-2 block">Major Interest</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <select className="w-full bg-[#1a1a1e] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 appearance-none">
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Data Science</option>
                    <option>Languages</option>
                  </select>
                </div>
              </div>
            )}

            {/* PASSWORD INPUT */}
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase ml-2 mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button 
              type="submit"
              className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-200 active:scale-[0.98] transition-all shadow-lg shadow-white/5"
            >
              {isLogin ? "Sign In" : "Register Now"} <ArrowRight size={18} />
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#121214] px-4 text-slate-500 font-bold">Or</span></div>
          </div>

          {/* SOCIAL LOGINS */}
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-all text-white font-medium">
              <Globe size={18} className="text-blue-400" /> Google
            </button>
            <button type="button" className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-all text-white font-medium">
              <User size={18} className="text-slate-400" /> GitHub
            </button>
          </div>
        </div>

        {/* TOGGLE LINK */}
        <p className="text-center mt-8 text-slate-500 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-bold text-white hover:text-purple-400 transition underline underline-offset-4"
          >
            {isLogin ? "Create Account" : "Sign In"}
          </button>
        </p>

      </div>
    </div>
  );
}