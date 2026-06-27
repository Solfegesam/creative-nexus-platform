import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 py-10 text-center text-slate-400">
        <p>© 2026 Creative Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
}