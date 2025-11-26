"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import EventBanner from "@/components/planner/EventBanner";
import MetricCard from "@/components/planner/MetricCard";
import ActivityCard from "@/components/planner/ActivityCard";
import ActionCard from "@/components/planner/ActionCard";

export default function DetailedDashboardPage() {
  const activities = [
    { message: "3 new RSVPs received", timeAgo: "2 hrs ago" },
    { message: "DJ confirmed availability", timeAgo: "2 hrs ago" },
    { message: "Catering quote updated", timeAgo: "2 hrs ago" },
    { message: "3 new RSVPs received", timeAgo: "2 hrs ago" },
  ];

  return (
    <DashboardLayout role="planner">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-8">DASHBOARD</h1>

        {/* Event Banner */}
        <EventBanner
          eventName="Toluwanimi's Birthday Party"
          location="Lagos Island, Lagos"
          date="19 December 2025"
          daysRemaining={50}
        />

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <MetricCard
            title="Budget Health"
            value="₦20,000,000"
            iconColor="purple"
            icon={<span className="text-lg lg:text-xl font-bold">₦</span>}
          />
          <MetricCard
            title="Vendors Booked"
            value="12"
            iconColor="pink"
            icon={<span className="text-lg lg:text-xl font-bold">₦</span>}
          />
          <MetricCard
            title="Guest RSVP"
            value="1,500"
            iconColor="red"
            icon={<span className="text-lg lg:text-xl font-bold">₦</span>}
          />
          <MetricCard
            title="Task Completed"
            value="9"
            iconColor="green"
            icon={<span className="text-lg lg:text-xl font-bold">₦</span>}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Urgent Actions */}
          <div className="lg:col-span-2">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">Urgent Actions</h3>
            <div className="space-y-4">
              <ActionCard
                title="Photographer deposit due"
                description=""
                variant="urgent"
                status="3 days overdue"
              />
              <ActionCard
                title="Create your guest list now"
                description="You can create your guest list and start adding people"
                variant="urgent"
              />
              <ActionCard
                title="Create your guest list now"
                description="You can create your guest list and start adding people"
                variant="urgent"
              />
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <ActivityCard activities={activities} />
          </div>
        </div>

        {/* Smart Suggestions */}
        <div className="mt-6 lg:mt-8">
          <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-4">Smart Suggestions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ActionCard
              title="Create your guest list now"
              description="You can create your guest list and start adding people"
              variant="suggestion"
              priority="medium"
            />
            <ActionCard
              title="Create your guest list now"
              description="You can create your guest list and start adding people"
              variant="suggestion"
              priority="high"
            />
            <ActionCard
              title="Create your guest list now"
              description="You can create your guest list and start adding people"
              variant="suggestion"
              priority="low"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

