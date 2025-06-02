import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterControls from "@/components/ui/FilterControls";
import DataToolbar from "@/components/ui/DataToolbar";
import DataPlaceholder from "@/components/ui/DataPlaceholder";
import VisualisasiPlaceholder from "@/components/ui/visualizationPlaceHolder";
import DistribusiTable, {
  DistribusiRow,
  sampelDistribusiData,
} from "@/components/kependudukan/distribusiPenduduk/DistribusiTable";

type Filter = {
  year: number | null;
  kecamatan: string;
  kelurahan: string;
  rw: string;
};

const DataContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"data" | "visualisasi">("data");
  const [filters, setFilters] = useState<Filter>({
    year: null,
    kecamatan: "",
    kelurahan: "",
    rw: "Semua RW",
  });

  const handleTabChange = (value: string) => {
    if (value === "data" || value === "visualisasi") {
      setActiveTab(value);
    }
  };

  const handleFilterChange = (newFilters: Filter) => {
    setFilters(newFilters);
  };

  const handleExport = () => {
    console.log("Export data dengan filter:", filters);
  };

  const handleInput = () => {
  };

  const filteredData: DistribusiRow[] = sampelDistribusiData.filter((d) =>
    filters.year !== null ? d.tahun === filters.year : true
  );

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
            <DistribusiTable data={filteredData} />
          )}
        </TabsContent>

        <TabsContent value="visualisasi">
          <VisualisasiPlaceholder />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataContent;
