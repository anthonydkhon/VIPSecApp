import React from "react";
import { Bell } from "lucide-react";

const AlertSystem = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Security Alerts</h1>
        <p className="text-gray-600">
          Monitor and manage security alerts and threats
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="text-center text-gray-500">
          <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Alert Management System</h3>
          <p>Personal information monitoring and alert features</p>
          <p className="text-sm mt-2">
            Integration ready for dark web monitoring APIs
          </p>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg text-left">
            <h4 className="font-medium text-blue-900 mb-2">Future Features:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Dark web monitoring for compromised credentials</li>
              <li>• Personal information exposure alerts</li>
              <li>• Breach notification system</li>
              <li>• Custom alert rules and notifications</li>
              <li>• Real-time threat intelligence feeds</li>
              <li>• Automated incident response workflows</li>
            </ul>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg text-left">
            <h4 className="font-medium text-yellow-900 mb-2">
              Integration Points:
            </h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Slack API for instant notifications</li>
              <li>• Email SMTP for alert delivery</li>
              <li>• External threat intelligence APIs</li>
              <li>• SIEM system integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSystem;
