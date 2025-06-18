import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterControls from "@/components/ui/FilterControls";
import DataToolbar from "@/components/ui/DataToolbar";
import DataPlaceholder from "@/components/ui/DataPlaceholder";
import VisualisasiPlaceholder from "@/components/ui/visualizationPlaceHolder";
import { sampleRtData } from "@/data/rtData";
import RtByRwTable from "@/components/pemerintahan/rt/RtByRwTable";
import InputModal from "@/components/pemerintahan/rt/input";

const DataPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"data" | "visualisasi">("data");
  const [filters, setFilters] = useState({
    year: null,
    kecamatan: "",
    kelurahan: "",
    rw: "Semua RW",
  });

  // state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (value: string) => setActiveTab(value as any);
  const handleFilterChange = (newFilters: any) => setFilters(newFilters);
  const handleExport = () => console.log("Export data dengan filter:", filters);
  const handleInput = () => setIsModalOpen(true);

  const filteredData = sampleRtData
    .filter((d) => (filters.year ? d.tahun === filters.year : true))
    .filter((d) =>
      filters.rw && filters.rw !== "Semua RW" ? d.rw === filters.rw : true
    )
    .filter((d) =>
      filters.kecamatan ? d.kecamatan === filters.kecamatan : true
    )
    .filter((d) =>
      filters.kelurahan ? d.kelurahan === filters.kelurahan : true
    );

  return (
    <div className="p-6 space-y-4 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="flex justify-between items-center">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="visualisasi">Visualisasi Data</TabsTrigger>
            </TabsList>
          </Tabs>
          <DataToolbar onExport={handleExport} onOpenInput={handleInput} />
        </div>

        <FilterControls onFilterChange={handleFilterChange} />

        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsContent value="data">
            {filteredData.length === 0 ? (
              <DataPlaceholder
                message={
                  filters.year === null && filters.rw === "Semua RW"
                    ? "Tidak ada data"
                    : "Tidak ada data sesuai filter"
                }
                iconColor="text-red-500"
              />
            ) : (
              <RtByRwTable data={filteredData} />
            )}
          </TabsContent>
          <TabsContent value="visualisasi">
            <VisualisasiPlaceholder />
          </TabsContent>
        </Tabs>

        {/* Panggil modal terpisah */}
        <InputModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </div>
  );
};

export default DataPage;
