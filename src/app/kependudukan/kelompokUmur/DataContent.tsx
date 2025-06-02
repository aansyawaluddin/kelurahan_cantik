import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterControls from "@/components/kependudukan/FilterControls";
import DataToolbar from "@/components/kependudukan/DataToolbars";
import DataPlaceholder from "@/components/kependudukan/DataPlaceholders";
import VisualizationPlaceholder from "@/components/kependudukan/visualizationPlaceholder";
import KelompokUmurTable from "@/components/kependudukan/kelompokUmur/kelompokUmurTable";

const dummyData = [
  {
    tahun: 2024,
    kelompokUmur: "0-4",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "5-9",
    lakiLaki: 702,
    perempuan: 685,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "10-14",
    lakiLaki: 702,
    perempuan: 685,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "15-19",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "20-24",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "25-29",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "30-34",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "35-39",
    lakiLaki: 702,
    perempuan: 685,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "40-44",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "45-49",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
];

const DataContent = () => {
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

  const handleFilterChange = (newFilters: Filter) => setFilters(newFilters);
  const handleExport = () => console.log("Export data kelompok umur:", filters);
  const handleInput = () => {}; // Fungsi placeholder untuk input

  // Filter data berdasarkan tahun
  const filteredData = dummyData.filter((d) =>
    filters.year ? d.tahun === filters.year : true
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
            <KelompokUmurTable data={filteredData} />
          )}
        </TabsContent>

        <TabsContent value="visualisasi">
          <VisualizationPlaceholder />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataContent;
