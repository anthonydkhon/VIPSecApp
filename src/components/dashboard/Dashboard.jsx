import React from "react";
import {
  Users,
  Shield,
  Headphones,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Bell,
} from "lucide-react";

const Dashboard = () => {
  // Mock data for the enhanced dashboard
  const stats = [
    {
      label: "Active Users",
      value: "24",
      subtext: "3 online now",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Threats Detected",
      value: "7",
      subtext: "This week",
      icon: Shield,
      color: "bg-red-500",
    },
    {
      label: "Open Tickets",
      value: "12",
      subtext: "5 high priority",
      icon: Headphones,
      color: "bg-yellow-500",
    },
    {
      label: "System Health",
      value: "99.9%",
      subtext: "Uptime",
      icon: Activity,
      color: "bg-green-500",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "login",
      user: "john.doe@client.com",
      action: "User login from new device",
      timestamp: "2 minutes ago",
      severity: "info",
    },
    {
      id: 2,
      type: "threat",
      user: "System Alert",
      action: "Malware detected and quarantined",
      timestamp: "15 minutes ago",
      severity: "warning",
    },
    {
      id: 3,
      type: "ticket",
      user: "jane.smith@client.com",
      action: "New support ticket created",
      timestamp: "1 hour ago",
      severity: "info",
    },
    {
      id: 4,
      type: "assessment",
      user: "Security Team",
      action: "Vulnerability assessment completed",
      timestamp: "2 hours ago",
      severity: "success",
    },
    {
      id: 5,
      type: "alert",
      user: "System Alert",
      action: "Failed login attempts detected",
      timestamp: "3 hours ago",
      severity: "warning",
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "login":
        return User;
      case "threat":
        return AlertTriangle;
      case "ticket":
        return Headphones;
      case "assessment":
        return Shield;
      case "alert":
        return Bell;
      default:
        return Activity;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "warning":
        return "text-yellow-600 bg-yellow-50";
      case "success":
        return "text-green-600 bg-green-50";
      case "error":
        return "text-red-600 bg-red-50";
      default:
        return "text-blue-600 bg-blue-50";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Security Dashboard</h1>
        <p className="text-gray-600">
          Real-time overview of your cybersecurity operations
        </p>
      </div>

      {/* Stats Overview */}
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
                <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {recentActivity.map((activity) => {
              const IconComponent = getActivityIcon(activity.type);
              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div
                    className={`p-2 rounded-full ${getSeverityColor(
                      activity.severity
                    )}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions & Status */}
        <div className="space-y-6">
          {/* System Status */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">System Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Security Tools</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Threat Detection</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Backup Systems</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-yellow-600">Syncing</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Services</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600">Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Priorities */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Priority Actions</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-900">
                    Critical Vulnerability
                  </p>
                  <p className="text-xs text-red-700">
                    Requires immediate attention
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <Clock className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">
                    Pending Assessment
                  </p>
                  <p className="text-xs text-yellow-700">Due in 2 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Training Required
                  </p>
                  <p className="text-xs text-blue-700">
                    5 users need certification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
