// components/layout/dashboard-layout.tsx
"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Building2,
  PiggyBank,
  Globe,
  Palette,
  Gift,
  Users,
  Settings,
  Search,
  Bell,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";
import HomeIcon from "@/public/icons/HomeIcon";
import EventsIcon from "@/public/icons/EventsIcon";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "planner" | "vendor";
}

const plannerNavItems = [
  { name: "Dashboard", href: ROUTES.PLANNER.DASHBOARD, icon: HomeIcon },
  { name: "Events", href: ROUTES.PLANNER.EVENTS.BASE, icon: EventsIcon },
  { name: "Vendors", href: ROUTES.PLANNER.VENDORS, icon: Briefcase },
  { name: "Venues", href: "/planner/venues", icon: Building2 },
  { name: "Budget", href: "/planner/budget", icon: PiggyBank },
  { name: "Website", href: "/planner/website", icon: Globe },
  { name: "Designs", href: "/planner/designs", icon: Palette },
  { name: "Registry", href: "/planner/registry", icon: Gift },
  { name: "Guests", href: "/planner/guests", icon: Users },
  { name: "Settings", href: ROUTES.PLANNER.SETTINGS, icon: Settings },
];

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname();
  const navItems = role === "planner" ? plannerNavItems : [];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#EEE9E5] h-screen p-4 lg:p-8 flex flex-col gap-8 transform transition-transform duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
        <div className="flex items-center justify-between flex-shrink-0">
          <div className="text-xl lg:text-2xl font-bold text-[#5C4033]">Àriyá</div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 hover:bg-[#E5DDD5] rounded-lg transition-colors">
            <X className="w-5 h-5 text-[#5C4033]" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 lg:gap-4 p-3 rounded-lg transition-colors",
                      isActive ? "bg-[#D0771E] text-white" : "text-[#8C8C8C] hover:bg-[#E5DDD5]"
                    )}>
                    <Icon fill={isActive ? "white" : "#8C8C8C"} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex items-center justify-between gap-4 flex-shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
              <input
                type="text"
                placeholder="Search for something..."
                className="w-full pl-8 lg:pl-10 pr-4 py-2 text-sm lg:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0771E] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
            </button>
            <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
            </button>
            <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <span className="text-lg lg:text-xl">🇳🇬</span>
            </button>
            <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
              <User className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-white">{children}</main>
      </div>
    </div>
  );
}
