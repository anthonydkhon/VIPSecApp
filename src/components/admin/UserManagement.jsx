import React, { useState } from "react";
import {
  Users,
  Plus,
  Mail,
  Shield,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Search,
  Filter,
} from "lucide-react";

const UserManagement = () => {
  const [activeSubTab, setActiveSubTab] = useState("clients");
  const [showAddUser, setShowAddUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const subTabs = [
    { id: "clients", label: "Clients", icon: Users },
    { id: "technicians", label: "Security Technicians", icon: Shield },
    { id: "roles", label: "User Roles & Permissions", icon: UserCheck },
  ];

  const clients = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@acme.com",
      company: "Acme Corporation",
      role: "client",
      status: "active",
      lastLogin: "2024-09-18 14:30",
      mfaEnabled: true,
      services: ["Monitoring", "Training"],
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Bob Chen",
      email: "bob@techstart.com",
      company: "TechStart Inc",
      role: "client",
      status: "active",
      lastLogin: "2024-09-17 16:45",
      mfaEnabled: false,
      services: ["Penetration Testing", "Compliance"],
      joinDate: "2024-03-20",
    },
    {
      id: 3,
      name: "Carol Smith",
      email: "carol@global.com",
      company: "Global Manufacturing",
      role: "client",
      status: "inactive",
      lastLogin: "2024-09-10 09:15",
      mfaEnabled: true,
      services: ["Policy Review"],
      joinDate: "2024-02-10",
    },
  ];

  const technicians = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@vipsec.com",
      role: "senior_analyst",
      status: "active",
      lastLogin: "2024-09-18 15:20",
      mfaEnabled: true,
      specialization: "Incident Response",
      clients: ["Acme Corporation", "TechStart Inc"],
      joinDate: "2023-05-15",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@vipsec.com",
      role: "penetration_tester",
      status: "active",
      lastLogin: "2024-09-18 14:50",
      mfaEnabled: true,
      specialization: "Vulnerability Assessment",
      clients: ["TechStart Inc", "Global Manufacturing"],
      joinDate: "2023-08-22",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.wilson@vipsec.com",
      role: "security_consultant",
      status: "active",
      lastLogin: "2024-09-18 13:30",
      mfaEnabled: true,
      specialization: "Compliance & Training",
      clients: ["Acme Corporation", "Global Manufacturing"],
      joinDate: "2023-03-10",
    },
  ];

  const roles = [
    {
      name: "Admin",
      description: "Full system access and management",
      permissions: ["All Permissions"],
      userCount: 1,
      color: "bg-red-100 text-red-800",
    },
    {
      name: "Senior Analyst",
      description: "Advanced security analysis and incident response",
      permissions: [
        "Security Management",
        "Incident Response",
        "Client Access",
        "Report Generation",
      ],
      userCount: 2,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Penetration Tester",
      description: "Vulnerability assessment and penetration testing",
      permissions: [
        "Security Testing",
        "Assessment Tools",
        "Client Access",
        "Report Generation",
      ],
      userCount: 1,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Security Consultant",
      description: "Policy development and compliance consulting",
      permissions: [
        "Policy Management",
        "Training",
        "Client Access",
        "Compliance Tools",
      ],
      userCount: 1,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Client",
      description: "Limited access to assigned services and reports",
      permissions: ["View Reports", "Create Tickets", "Access Training"],
      userCount: 3,
      color: "bg-gray-100 text-gray-800",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-50";
      case "inactive":
        return "text-red-600 bg-red-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const handleInviteUser = () => {
    setShowAddUser(true);
  };

  const handleEditUser = (userId) => {
    alert(`Editing user ${userId}...`);
  };

  const handleDeleteUser = (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      alert(`Deleting user ${userId}...`);
    }
  };

  const renderContent = () => {
    switch (activeSubTab) {
      case "clients":
        return (
          <div className="space-y-6">
            {/* Search and Actions */}
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleInviteUser}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Invite Client
              </button>
            </div>

            {/* Clients Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-900">
                      Client
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900">
                      Company
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900">
                      Status
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900">
                      Services
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900">
                      Last Login
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900">
                      MFA
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {client.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {client.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-900">
                        {client.company}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                            client.status
                          )}`}
                        >
                          {client.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {client.services.map((service, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {client.lastLogin}
                      </td>
                      <td className="p-4">
                        {client.mfaEnabled ? (
                          <UserCheck className="w-4 h-4 text-green-600" />
                        ) : (
                          <UserX className="w-4 h-4 text-red-600" />
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditUser(client.id)}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(client.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "technicians":
        return (
          <div className="space-y-6">
            {/* Search and Actions */}
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search technicians..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleInviteUser}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Add Technician
              </button>
            </div>

            {/* Technicians Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicians.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-white p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-gray-600">{tech.email}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                        tech.status
                      )}`}
                    >
                      {tech.status}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Role:</span>
                      <span className="ml-2 font-medium">
                        {tech.role.replace("_", " ")}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Specialization:</span>
                      <span className="ml-2 font-medium">
                        {tech.specialization}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Assigned Clients:</span>
                      <div className="mt-1 space-y-1">
                        {tech.clients.map((client, index) => (
                          <span
                            key={index}
                            className="block text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Last Login:</span>
                      <span className="ml-2 text-xs">{tech.lastLogin}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-500 text-xs">MFA:</span>
                        {tech.mfaEnabled ? (
                          <UserCheck className="w-4 h-4 text-green-600" />
                        ) : (
                          <UserX className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditUser(tech.id)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(tech.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "roles":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                User Roles & Permissions
              </h3>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                Create Role
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">{role.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs ${role.color}`}>
                      {role.userCount} users
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {role.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-xs font-medium text-gray-700 uppercase tracking-wide">
                      Permissions
                    </h5>
                    <div className="space-y-1">
                      {role.permissions.map((permission, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                    <button className="flex-1 text-blue-600 hover:text-blue-700 text-sm">
                      Edit Role
                    </button>
                    {role.name !== "Admin" && (
                      <button className="flex-1 text-red-600 hover:text-red-700 text-sm">
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-600">
          Manage clients, security technicians, and user permissions
        </p>
      </div>

      {/* Sub-navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
              activeSubTab === tab.id
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Invite User</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option value="client">Client</option>
                  <option value="security_consultant">
                    Security Consultant
                  </option>
                  <option value="penetration_tester">Penetration Tester</option>
                  <option value="senior_analyst">Senior Analyst</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company (for clients)
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Send Invitation
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddUser(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
