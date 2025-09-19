import React from "react";
import {
  Home,
  Users,
  Shield,
  BarChart3,
  Headphones,
  FileEdit,
  GitBranch,
  Settings,
  Search,
  BookOpen,
} from "lucide-react";

const Navigation = ({ currentUser, activeTab, setActiveTab, onLogout }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "users", label: "Users", icon: Users },
    { id: "security", label: "Security", icon: Shield },
    { id: "metrics", label: "Metrics & Reports", icon: BarChart3 },
    { id: "tickets", label: "Tickets / Requests", icon: Headphones },
    { id: "services", label: "Services / Assessments", icon: FileEdit },
    { id: "education", label: "Education", icon: BookOpen, adminOnly: false },
    ...(currentUser?.role === "admin"
      ? [
          { id: "integrations", label: "Integrations", icon: GitBranch },
          { id: "settings", label: "Settings", icon: Settings },
          { id: "logs", label: "Logs / Audit Trail", icon: Search },
        ]
      : []),
  ];

  return (
    <nav className="bg-slate-900 text-white w-64 min-h-screen p-4 relative">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-blue-400" />
        <div>
          <h1 className="text-xl font-bold">VipSec Portal</h1>
          <p className="text-sm text-gray-400">
            {currentUser?.role === "admin" ? "Admin Panel" : "User Portal"}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
              activeTab === item.id ? "bg-blue-600" : "hover:bg-slate-800"
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-slate-800 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">{currentUser?.name}</span>
          </div>
          <p className="text-xs text-gray-400">{currentUser?.email}</p>
          <button
            onClick={onLogout}
            className="text-xs text-blue-400 hover:text-blue-300 mt-2"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
