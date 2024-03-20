'use client';
import DashboardHeader from "@/components/dashboardHeader/DashboardHeader";

export default function DashboardLayout({ children }) {
  return <section>
    <DashboardHeader />
    {children}
    </section>
}
