"use client";

import { cn } from "@/lib/utils";

interface ActionCardProps {
  title: string;
  description: string;
  variant?: "urgent" | "suggestion";
  priority?: "high" | "medium" | "low";
  status?: string;
}

const variantStyles = {
  urgent: {
    default: "bg-orange-50 border-orange-200",
    red: "bg-red-50 border-red-200",
  },
  suggestion: "bg-white border-gray-200",
};

const priorityColors = {
  high: "text-red-600",
  medium: "text-orange-600",
  low: "text-blue-600",
};

export default function ActionCard({ title, description, variant = "suggestion", priority, status }: ActionCardProps) {
  const bgClass = variant === "urgent" && status?.includes("overdue") ? variantStyles.urgent.red : variantStyles.urgent.default;
  const containerClass = variant === "urgent" ? bgClass : variantStyles.suggestion;

  return (
    <div className={cn("rounded-lg border p-3 lg:p-4", containerClass)}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">{title}</h4>
          {description && (
            <p className="text-xs lg:text-sm text-gray-600">{description}</p>
          )}
          {status && (
            <p className={cn("text-xs lg:text-sm font-medium mt-2", status.includes("overdue") ? "text-red-600" : "text-gray-700")}>
              {status}
            </p>
          )}
        </div>
        {priority && (
          <span className={cn("text-xs font-semibold px-2 py-1 rounded flex-shrink-0", priorityColors[priority])}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </span>
        )}
      </div>
    </div>
  );
}

