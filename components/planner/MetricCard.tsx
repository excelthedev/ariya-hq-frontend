"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  iconColor: "purple" | "pink" | "red" | "green";
  icon: ReactNode;
}

const colorClasses = {
  purple: "bg-purple-100 text-purple-600",
  pink: "bg-pink-100 text-pink-600",
  red: "bg-red-100 text-red-600",
  green: "bg-green-100 text-green-600",
};

export default function MetricCard({ title, value, iconColor, icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div className={cn("w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center", colorClasses[iconColor])}>
          {icon}
        </div>
      </div>
      <div>
        <p className="text-xs lg:text-sm text-gray-600 mb-1 lg:mb-2">{title}</p>
        <p className="text-2xl lg:text-3xl font-bold text-gray-900 break-words">{value}</p>
      </div>
    </div>
  );
}

