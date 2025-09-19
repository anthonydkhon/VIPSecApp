import React, { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import Navigation from "./components/layout/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import UserManagement from "./components/admin/UserManagement";
import Security from "./components/security/Security";
import Metrics from "./components/metrics/Metrics";
import TicketSystem from "./components/tickets/TicketSystem";
import Services from "./components/services/Services";
import Integrations from "./components/integrations/Integrations";
import Settings from "./components/settings/Settings";
import Logs from "./components/logs/Logs";
import { useAuth } from "./hooks/useAuth";
import Education from "./components/education/Education";

const App = () => {
  const { currentUser, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    // Check if user is trying to access admin-only sections
    const adminOnlyTabs = ["integrations", "settings", "logs"];

    if (adminOnlyTabs.includes(activeTab) && currentUser.role !== "admin") {
      // Redirect non-admins to dashboard
      setActiveTab("dashboard");
      return <Dashboard />;
    }

    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <UserManagement />;
      case "security":
        return <Security />;
      case "metrics":
        return <Metrics />;
      case "tickets":
        return <TicketSystem currentUser={currentUser} />;
      case "services":
        return <Services />;
      case "education":
        return <Education />;
      case "integrations":
        return <Integrations />;
      case "settings":
        return <Settings />;
      case "logs":
        return <Logs />;
      default:
        return <Dashboard />;
    }
  };

  if (!currentUser) {
    return <LoginForm onLogin={login} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Navigation
        currentUser={currentUser}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={logout}
      />
      <main className="flex-1 overflow-auto">{renderContent()}</main>
    </div>
  );
};

export default App;
