import { useEffect, useState } from "react";
import { ShieldCheck, AlertOctagon, UserX, CheckCircle, Trash2, ArrowLeft, BarChart3, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);

  // 1. Load Data on Mount
  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("community_reports") || "[]");
    
    // Default mock data to show if no one has reported anything yet
    const mockData = [
      { id: 101, user: "SpamBot", reason: "Spam Link", message: "Click here for free credits!", status: "Pending" },
      { id: 102, user: "User_99", reason: "Potential Slang", message: "This project is so @#$%ing hard!", status: "Pending" }
    ];
    
    // Merge them: showing newer local reports first
    setReports([...savedReports, ...mockData]);
  }, []);

  // 2. Single HandleAction Function
  const handleAction = (id, action) => {
    const updated = reports.filter(r => r.id !== id);
    setReports(updated);
    
    // Update local storage (only keep the real ones, usually ID > 1000)
    const realReportsOnly = updated.filter(r => r.id > 1000);
    localStorage.setItem("community_reports", JSON.stringify(realReportsOnly)); 
    
    alert(`${action} successful for report #${id}`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans p-8">
      
      {/* 🚀 ADMIN HEADER */}
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <button 
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-slate-500 hover:text-white mb-4 transition"
          >
            <ArrowLeft size={16} /> Back to App
          </button>
          <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <ShieldCheck className="text-purple-500" size={36} /> Admin Command Center
          </h1>
          <p className="text-slate-500 mt-2">Monitoring {1240 + reports.length} active swappers & safety.</p>
        </div>

        <div className="flex gap-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center min-w-[120px]">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Active Reports</p>
            <p className="text-2xl font-black text-red-500">{reports.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center min-w-[120px]">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">System Health</p>
            <p className="text-2xl font-black text-green-500">99%</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* 🚩 LIVE REPORT FEED */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertOctagon size={20} className="text-red-500" /> Pending Reports
          </h3>
          
          {reports.length === 0 ? (
            <div className="bg-white/5 border border-dashed border-white/10 rounded-[2.5rem] p-20 text-center">
              <CheckCircle size={48} className="mx-auto text-green-500/30 mb-4" />
              <p className="text-slate-500">All clear! No pending reports found.</p>
            </div>
          ) : (
            reports.map((report) => (
              <div key={report.id} className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] hover:bg-white/[0.07] transition-all group animate-in fade-in slide-in-from-bottom-2">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center font-bold text-white">
                      {report.user ? report.user[0] : "?"}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{report.user}</h4>
                      <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                        {report.reason}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-600 font-mono">ID: #{report.id}</span>
                </div>

                <div className="bg-black/40 p-4 rounded-2xl mb-6 italic text-sm text-slate-400 border-l-4 border-red-500/50">
                  "{report.message}"
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleAction(report.id, "Banning User")}
                    className="flex-1 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <UserX size={14} /> Ban User
                  </button>
                  <button 
                    onClick={() => handleAction(report.id, "Deleting Message")}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={14} /> Delete Msg
                  </button>
                  <button 
                    onClick={() => handleAction(report.id, "Dismissing Report")}
                    className="flex-1 bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={14} /> Dismiss
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 📊 SYSTEM STATS SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-700 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <BarChart3 className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Auto-Moderation</h3>
              <p className="text-xs text-purple-100 mb-6">SkillGuard AI has blocked 14 slangs automatically in the last 24 hours.</p>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[85%]" />
              </div>
              <p className="text-[10px] mt-2 font-bold opacity-70 uppercase tracking-widest text-right">85% Success Rate</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
            <h3 className="text-lg font-bold text-white mb-4">Quick Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Search user ID or email..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}