import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterControls from "@/components/pemerintahan/FilterControls";
import DataToolbar from "@/components/pemerintahan/DataToolbar";
import DataPlaceholder from "@/components/pemerintahan/DataPlaceholder";
import VisualisasiPlaceholder from "@/components/pemerintahan/visualizationPlaceHolder";
import PnsByEducation, {
  sampleRtData,
} from "@/components/pemerintahan/pns/PnsByEducation";
import InputModal from "@/components/pemerintahan/pns/input";
import Visualisasi from "@/components/pemerintahan/pns/visualisasi";

type Filter = {
  year: number | null;
  kecamatan: string;
  kelurahan: string;
  rw: string;
};

const DataPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"data" | "visualisasi">("data");
  const [filters, setFilters] = useState<Filter>({
    year: null,
    kecamatan: "",
    kelurahan: "",
    rw: "Semua RW",
  });

  // state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (value: string) => {
    if (value === "data" || value === "visualisasi") {
      setActiveTab(value);
    }
  };
  const handleFilterChange = (newFilters: Filter) => setFilters(newFilters);
  const handleExport = () => console.log("Export data dengan filter:", filters);
  const handleInput = () => setIsModalOpen(true);

  const filteredData = sampleRtData
    .filter((d) => (filters.year ? d.tahun === filters.year : true))
    // .filter((d) =>
    //   filters.rw && filters.rw !== "Semua RW" ? d.rw === filters.rw : true
    // );

  return (
    <div className="p-6 space-y-4">
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
            <PnsByEducation data={filteredData} />
          )}
        </TabsContent>
        <TabsContent value="visualisasi">
          <Visualisasi />
        </TabsContent>
      </Tabs>

      {/* Panggil modal terpisah */}
      <InputModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default DataPage;
