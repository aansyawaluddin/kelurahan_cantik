import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterControls from "@/components/pemerintahan/FilterControls";
import DataToolbar from "@/components/pemerintahan/DataToolbar";
import DataPlaceholder from "@/components/pemerintahan/DataPlaceholder";
import VisualisasiPlaceholder from "@/components/pemerintahan/visualizationPlaceHolder";

type TabKey = "data" | "visualisasi";

type Filters = {
  year: number | null;
  kecamatan: string;
  kelurahan: string;
  rw: string;
};

const DataPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("data");
  const [filters, setFilters] = useState<Filters>({
    year: null,
    kecamatan: "",
    kelurahan: "",
    rw: "Semua RW",
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabKey);
  };

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    console.log("Filters:", newFilters);
  };

  const handleExport = () => console.log("Export data with filters:", filters);
  const handleInput = () => console.log("Navigate to input page");

  return (
    <div className="p-6 space-y-4">
      {/* Bar atas: Tabs + Toolbar */}
      <div className="flex justify-between items-center">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="data">Data</TabsTrigger>
            <TabsTrigger value="visualisasi">Visualisasi Data</TabsTrigger>
          </TabsList>
        </Tabs>
        <DataToolbar
          onExport={handleExport}
          onOpenInput={handleInput}
        />
      </div>

      <FilterControls onFilterChange={handleFilterChange} />

      {/* Panel konten */}
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsContent value="data">
          {filters.year === null ? (
            <DataPlaceholder
              message="Silakan filter data terlebih dahulu"
              iconColor="text-red-500"
            />
          ) : (
            <div>/* Data table goes here */</div>
          )}
        </TabsContent>
        <TabsContent value="visualisasi">
          <VisualisasiPlaceholder />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataPage;
