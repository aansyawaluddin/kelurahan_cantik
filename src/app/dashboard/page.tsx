"use client";
import Sidebar from "@/components/ui/Sidebar";
import Header from "../../components/ui/Header";
import DashboardContent from "./DashboardContent";

export default function Home() {
  return (
    <div className="flex h-full bg-white">
      <Sidebar />
      <div className="ml-64 flex-1 flex flex-col h-full p-6 h-full space-y-6 overflow-auto">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}
