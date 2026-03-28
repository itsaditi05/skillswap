import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";  
import Chat from "./pages/Chat";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Matchmaking from "./pages/Matchmaking";
import Community from "./pages/Community";
import AdminPage from "./pages/AdminPage";
import Layout from "./pages/Layout";

// 🛡️ 1. THE GATEKEEPER: Checks if user is logged in
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* 🔒 PROTECTED PAGES (Wrapped in Sidebar Layout) */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout><Dashboard /></Layout>
          </ProtectedRoute>
        } />

        <Route path="/chat" element={
          <ProtectedRoute>
            <Layout><Chat /></Layout>
          </ProtectedRoute>
        } />

        <Route path="/community" element={
          <ProtectedRoute>
            <Layout><Community /></Layout>
          </ProtectedRoute>
        } />

        <Route path="/admin" element={
          <ProtectedRoute>
            <Layout><AdminPage /></Layout>
          </ProtectedRoute>
        } />

        {/* Other Pages */}
        <Route path="/booking" element={<ProtectedRoute><Layout><Booking /></Layout></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Layout><Profile /></Layout></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Layout><Explore /></Layout></ProtectedRoute>} />
        <Route path="/matchmaking" element={<ProtectedRoute><Layout><Matchmaking /></Layout></ProtectedRoute>} />

        {/* Catch-all: Redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;