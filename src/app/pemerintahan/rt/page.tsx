"use client";

import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import DataContent from "./DataContent";

export default function rt() {
    return (
        <div className="flex h-screen bg-white">
            <Sidebar />
            <div className="ml-64 flex-1 flex flex-col h-full space-y-6 overflow-y-scroll bg-gray-50">
                <Header />
                <DataContent/>
            </div>
        </div>
    );
}
