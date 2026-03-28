import { useNavigate, useLocation } from "react-router-dom";
import { Home, MessageSquare, Users, Shield, LogOut, Zap } from "lucide-react";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/dashboard" },
    { icon: <MessageSquare size={20} />, label: "Messages", path: "/chat" },
    { icon: <Users size={20} />, label: "Community", path: "/community" },
    { icon: <Shield size={20} />, label: "Admin", path: "/admin" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#0a0a0c] overflow-hidden">
      {/* 🚀 SIDEBAR */}
      <aside className="w-64 border-r border-white/5 bg-black/20 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-600/20">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter">SkillSwap</span>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium ${
                location.pathname === item.path 
                ? "bg-white text-black shadow-lg shadow-white/5" 
                : "text-slate-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 transition-colors mt-auto"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* 📱 MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}