// app/vendor/dashboard/page.tsx
"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRole } from "@/hooks/use-role";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function VendorDashboardPage() {
  const { user, loading } = useAuth();
  const { canAccessVendorFeatures } = useRole();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !canAccessVendorFeatures())) {
      router.push("/auth/login");
    }
  }, [user, loading, canAccessVendorFeatures, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!canAccessVendorFeatures()) {
    return <div>Access denied. Please log in as a vendor.</div>;
  }

  return (
    <DashboardLayout role="vendor">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Total Quotes</h2>
          <p className="text-3xl font-bold text-indigo-600">15</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Accepted Quotes</h2>
          <p className="text-3xl font-bold text-green-600">8</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Pending Quotes</h2>
          <p className="text-3xl font-bold text-yellow-600">7</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h2>
        <ul className="space-y-4">
          <li className="flex justify-between py-2 border-b">
            <span>New quote request: Photography Services</span>
            <span className="text-gray-500">2 hours ago</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span>Event completed: Corporate Seminar</span>
            <span className="text-gray-500">1 day ago</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span>Portfolio updated with new images</span>
            <span className="text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
}
