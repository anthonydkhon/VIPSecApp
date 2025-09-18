import React from "react";
import { Ticket, AlertTriangle, CheckCircle, Shield } from "lucide-react";

const Dashboard = () => {
  // Mock data - in real app, this would come from props or context
  const tickets = [
    {
      id: 1,
      title: "Suspicious Email Activity",
      status: "open",
      createdAt: "2024-09-15",
    },
    {
      id: 2,
      title: "Password Reset Request",
      status: "in-progress",
      createdAt: "2024-09-16",
    },
  ];

  const stats = [
    {
      label: "Open Tickets",
      value: tickets.filter((t) => t.status === "open").length,
      icon: Ticket,
      color: "bg-red-500",
    },
    {
      label: "Active Alerts",
      value: "3",
      icon: AlertTriangle,
      color: "bg-yellow-500",
    },
    {
      label: "Completed Training",
      value: "12",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      label: "Security Score",
      value: "94%",
      icon: Shield,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Security Dashboard</h1>
        <p className="text-gray-600">
          Monitor your cybersecurity status and activities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {tickets.slice(0, 3).map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <Ticket className="w-4 h-4 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{ticket.title}</p>
                  <p className="text-xs text-gray-600">{ticket.createdAt}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    ticket.status === "open"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">
            Security Recommendations
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Shield className="w-4 h-4 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900">Enable 2FA</p>
                <p className="text-xs text-blue-700">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-900">
                  Complete Training
                </p>
                <p className="text-xs text-green-700">
                  Finish the remaining security modules
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
