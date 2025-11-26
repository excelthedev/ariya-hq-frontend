"use client";

import { User } from "lucide-react";

interface Activity {
  message: string;
  timeAgo: string;
}

interface ActivityCardProps {
  activities: Activity[];
}

export default function ActivityCard({ activities }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
      <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Recent Activities</h3>
      <ul className="space-y-3 lg:space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start gap-2 lg:gap-3 pb-3 lg:pb-4 border-b border-gray-100 last:border-0">
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <User className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs lg:text-sm text-gray-900 break-words">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.timeAgo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

