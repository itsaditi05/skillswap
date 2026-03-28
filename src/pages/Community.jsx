import { useState } from "react";
import { Send, Users, ShieldAlert, Bot, Info, CheckCircle, Sparkles, Flag, X, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Community() {
  const navigate = useNavigate();
  const [joined, setJoined] = useState(false);
  const [showReportModal, setShowReportModal] = useState(null); // Stores the message being reported
  const [msg, setMsg] = useState("");
  
  const [messages, setMessages] = useState([
    { id: 1, user: "Rahul S.", text: "Anyone here knows how to deploy a Vite app on Hostinger?", time: "10:05 AM", type: "user" },
    { id: 2, user: "SkillBot", text: "I can help! Usually, you run 'npm run build' and upload the 'dist' folder via FTP.", time: "10:05 AM", type: "bot" },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;

    // Proactive Slang Check
    const bannedWords = ["badword1", "slang2"]; 
    if (bannedWords.some(word => msg.toLowerCase().includes(word))) {
      alert("⚠️ Rules Violation: Offensive language is not allowed.");
      setMsg("");
      return;
    }

    setMessages([...messages, { id: Date.now(), user: "You", text: msg, time: "Just now", type: "user" }]);
    setMsg("");
  };

  // --- JOIN SCREEN ---
  if (!joined) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-6 relative overflow-hidden text-center">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="max-w-2xl relative z-10">
          <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <Users size={40} className="text-purple-400" />
          </div>
          <h1 className="text-5xl font-black text-white mb-6 tracking-tight">The Global Hub</h1>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">Connect with 1,200+ students in a professional, slang-free environment.</p>
          <button 
            onClick={() => setJoined(true)}
            className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl"
          >
            Join the Community
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0c] h-screen flex text-slate-300 font-sans overflow-hidden relative">
      
      {/* 🚩 REPORT MODAL */}
      {showReportModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#121214] border border-white/10 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" size={20} /> Report Post
              </h3>
              <button onClick={() => setShowReportModal(null)}><X size={20} className="text-slate-500 hover:text-white" /></button>
            </div>
            <p className="text-sm text-slate-400 mb-6">Are you sure you want to report this message by <span className="text-white font-bold">{showReportModal.user}</span> for violating community rules?</p>
            <div className="space-y-3">
              <button 
                onClick={() => { alert("Report submitted to SkillGuard."); setShowReportModal(null); }}
                className="w-full py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-2xl font-bold transition-all"
              >
                Confirm Report
              </button>
             
              <button onClick={() => setShowReportModal(null)} className="w-full py-4 bg-white/5 text-slate-400 rounded-2xl font-bold">Cancel</button>
          
          // inside the Report Modal in Community.jsx
<button 
  onClick={() => {
    // 1. Get existing reports or start a new list
    const existingReports = JSON.parse(localStorage.getItem("community_reports") || "[]");
    
    // 2. Create the new report object
    const newReport = {
      id: Date.now(),
      user: showReportModal.user,
      message: showReportModal.text,
      reason: "User Flagged",
      status: "Pending"
    };

    // 3. Save to Local Storage
    localStorage.setItem("community_reports", JSON.stringify([...existingReports, newReport]));
    
    alert("Report submitted to SkillGuard.");
    setShowReportModal(null);
  }}
  className="w-full py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-2xl font-bold transition-all"
>
  Confirm Report
</button>
            </div>
          </div>
        </div>
      )}

      {/* 🛡️ SIDEBAR */}
      <aside className="hidden lg:flex w-80 border-r border-white/10 flex-col p-6 bg-white/5">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
            <Users className="text-white" size={20} />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Skill Hub</h2>
        </div>
        <div className="bg-white/5 border border-white/10 p-5 rounded-3xl">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <ShieldAlert size={14} className="text-red-400" /> Community Rules
          </h3>
          <ul className="text-xs space-y-3 text-slate-400">
            <li>• No slangs or toxicity.</li>
            <li>• Respect all learners.</li>
            <li>• Use <Flag size={10} className="inline" /> to report.</li>
          </ul>
        </div>
      </aside>

      {/* 💬 CHAT AREA */}
      <main className="flex-1 flex flex-col relative bg-[#0a0a0c]">
        <header className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20 backdrop-blur-md">
          <span className="text-sm font-medium text-slate-400 px-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> 1,240 Swappers Online
          </span>
          <button onClick={() => navigate("/dashboard")} className="p-2 hover:bg-white/5 rounded-full text-slate-500"><Info size={20} /></button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((m) => (
            <div key={m.id} className={`flex gap-4 group ${m.type === 'bot' ? 'bg-purple-500/5 p-4 rounded-3xl border border-purple-500/10' : ''}`}>
              <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold ${m.type === 'bot' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
                {m.type === 'bot' ? <Bot size={20} /> : m.user[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold ${m.type === 'bot' ? 'text-purple-400' : 'text-white'}`}>{m.user}</span>
                  {m.type !== 'bot' && (
                    <button 
                      onClick={() => setShowReportModal(m)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 hover:text-red-500 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <Flag size={12} /> Report
                    </button>
                  )}
                </div>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className="p-6">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2rem] p-2 flex items-center gap-3">
            <input 
              type="text" 
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Message global-hub..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white px-4"
            />
            <button type="submit" className="bg-white text-black p-3 rounded-2xl hover:bg-purple-400 hover:text-white transition-all"><Send size={20} /></button>
          </form>
        </footer>
      </main>
    </div>
  );
}