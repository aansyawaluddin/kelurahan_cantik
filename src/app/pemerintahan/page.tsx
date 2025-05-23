"use client";

import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import DataContent from "./DataContent";

export default function pemerintah() {
    return (
      <div className="flex h-screen bg-white">
        <Sidebar />
        <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
          <Header />
          <DataContent/>
        </div>
      </div>
    );
}
