"use client";
import Sidebar from "@/components/ui/Sidebar";
import Header from "../../components/ui/Header";
import DashboardContent from "./DashboardContent";

export default function Home() {
  return (
    <div className="flex h-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6 h-full space-y-6">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}
