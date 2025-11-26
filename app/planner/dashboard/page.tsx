"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { MapPin, Calendar, Hourglass, Camera } from "lucide-react";

export default function PlannerDashboardPage() {
  return (
    <DashboardLayout role="planner">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-8">DASHBOARD</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Event Overview Card - Large */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-48 lg:h-64 bg-gradient-to-br from-purple-900 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 lg:p-6 flex flex-col items-center gap-2 lg:gap-3 cursor-pointer hover:bg-black/60 transition-colors">
                  <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  <span className="text-white text-xs lg:text-sm font-medium">Add photo of event</span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:p-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Toluwanimi's Birthday Party</h2>
              <div className="space-y-2 lg:space-y-3">
                <div className="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[#D0771E] flex-shrink-0" />
                  <span>Lagos Island, Lagos</span>
                </div>
                <div className="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-[#D0771E] flex-shrink-0" />
                  <span>19 December 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm lg:text-base">
                  <Hourglass className="w-4 h-4 lg:w-5 lg:h-5 text-[#D0771E] flex-shrink-0" />
                  <span className="text-red-600 font-semibold">20 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid - 4 cards */}
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
              <h3 className="text-xs lg:text-sm font-medium text-gray-600 mb-2">Vendor Booking</h3>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
              {/* Placeholder for additional metric */}
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
              {/* Placeholder for additional metric */}
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
              {/* Placeholder for additional metric */}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

