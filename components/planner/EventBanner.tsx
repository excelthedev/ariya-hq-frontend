"use client";

import { MapPin, Calendar } from "lucide-react";

interface EventBannerProps {
  eventName: string;
  location: string;
  date: string;
  daysRemaining: number;
}

export default function EventBanner({ eventName, location, date, daysRemaining }: EventBannerProps) {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-black rounded-lg p-4 lg:p-8 mb-4 lg:mb-6 overflow-hidden">
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-32 h-32 lg:w-64 lg:h-64 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 lg:w-48 lg:h-48 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">{eventName}</h2>
          <div className="flex flex-col gap-2 lg:gap-3">
            <div className="flex items-center gap-2 text-sm lg:text-base text-white/90">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base text-white/90">
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 lg:w-24 lg:h-24 border-2 border-white/20 flex-shrink-0">
          <span className="text-2xl lg:text-3xl font-bold text-white">{daysRemaining}</span>
          <span className="text-xs lg:text-sm text-white/80">Days to go</span>
        </div>
      </div>
    </div>
  );
}

