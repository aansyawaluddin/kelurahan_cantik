import React from "react";
import FilterControls from "@/components/dashboard/FilterControls";
import MetricCards from "@/components/dashboard/MetricCards";
import PopulationDensity from "@/components/dashboard/PopulationDensityByRW";
import Heatmap from "@/components/dashboard/Heatmap";
import SchoolFacilitiesChart from "@/components/dashboard/SchoolChart";

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
    <div className="bg-gray-50 p-4 space-y-6 h-full">
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-semibold text-black">Selamat Datang!</h1>
        <FilterControls onFilterChange={handleFilterChange} />
        <MetricCards />
        <PopulationDensity />

        <div className="flex justify-around w-full">
          <SchoolFacilitiesChart />
          <Heatmap />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
