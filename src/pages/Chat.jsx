import { useState, useEffect } from "react"; // 1. Added useEffect
import { Send, Phone, Video, MoreVertical, CheckCircle, Calendar, Clock, BookOpen, X, Plus } from "lucide-react";
import io from "socket.io-client"; // 2. Import the client

// 3. Initialize Socket outside the component to prevent multiple connections
const socket = io.connect("http://localhost:3001"); 

export default function Chat() {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // 4. Start with empty array for real data

  // 5. Setup Listeners
  useEffect(() => {
    // Listen for history from MongoDB
    socket.on("previous_messages", (data) => {
      setMessages(data);
    });

    // Listen for new incoming messages
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    // Cleanup on unmount
    return () => socket.off();
  }, []);

  // 6. Function to send message to Backend
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const messageData = {
        sender: "You", // In a real app, use the logged-in user's name
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      socket.emit("send_message", messageData);
      setInput("");
    }
  };

  return (
    <div className="flex h-full bg-[#0a0a0c] rounded-[2.5rem] border border-white/5 overflow-hidden relative">
      {/* ... keep your Modal and Sidebar code the same ... */}

      <main className="flex-1 flex flex-col bg-[#0a0a0c]">
        {/* ... keep Header code the same ... */}

        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((m, index) => ( // Use index or m._id from Mongo
            <div key={index} className={`flex ${m.sender === "You" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] p-4 rounded-3xl text-sm ${
                m.sender === "You" ? "bg-purple-600 text-white rounded-tr-none" : "bg-white/5 text-slate-300 rounded-tl-none border border-white/5"
              }`}>
                {m.text}
                <p className="text-[9px] opacity-40 mt-2 font-mono">{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className="p-6 bg-gradient-to-t from-[#0a0a0c] to-transparent">
          {/* 7. Wrap input in a form to use handleSendMessage */}
          <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2rem] p-2 flex items-center gap-2 focus-within:bg-white/10 transition-all">
            <input 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 text-white" 
              placeholder="Start typing your deal..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="bg-white text-black p-3 rounded-2xl hover:bg-purple-400 hover:text-white transition-all shadow-lg shadow-white/5">
              <Send size={18} />
            </button>
          </form>
        </footer>
      </main>

      {/* ... keep Right Sidebar code the same ... */}
    </div>
  );
}