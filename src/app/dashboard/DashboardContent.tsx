import React from "react";
import FilterControls from "@/components/dashboard/FilterControls";
import MetricCards from "@/components/dashboard/MetricCards";
import KepadatanPenduduk from "@/components/dashboard/PopulationDensityByRW";

const DashboardContent: React.FC = () => {
  const handleFilterChange = (filters: {
    year: number | null;
    kecamatan: string;
    kelurahan: string;
  }) => {
    // TODO: fetch or filter data based on filters
    console.log("Filters:", filters);
  };

  return (
    <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto border rounded-lg border-gray-200">
      <h1 className="text-2xl font-semibold text-black">Selamat Datang!</h1>
      <FilterControls onFilterChange={handleFilterChange} />
      <MetricCards />
      <KepadatanPenduduk />
    </div>
  );
};

export default DashboardContent;
