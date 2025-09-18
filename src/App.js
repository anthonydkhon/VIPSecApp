import React, { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import Navigation from "./components/layout/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import TicketSystem from "./components/tickets/TicketSystem";
import Messages from "./components/messages/Messages";
import Education from "./components/education/Education";
import UserManagement from "./components/admin/UserManagement";
import AlertSystem from "./components/admin/AlertSystem";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { currentUser, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "tickets":
        return <TicketSystem currentUser={currentUser} />;
      case "messages":
        return <Messages currentUser={currentUser} />;
      case "education":
        return <Education />;
      case "users":
        return <UserManagement />;
      case "alerts":
        return <AlertSystem />;
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
