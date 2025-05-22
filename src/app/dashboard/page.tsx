"use client";
import Sidebar from "@/components/ui/Sidebar";
import Header from "../../components/dashboard/Header";
import DashboardContent from "./DashboardContent";

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}
