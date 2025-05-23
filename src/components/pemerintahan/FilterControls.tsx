
import React, { useState } from "react";
import YearPicker from "@/components/ui/yearPicker";
import { Input } from "@/components/ui/input";
import RwPicker from "@/components/ui/RwPicker";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";

export interface FilterProps {
  onFilterChange: (filters: {
    year: number | null;
    kecamatan: string;
    kelurahan: string;
    rw: string;
  }) => void;
}

const FilterControls: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [year, setYear] = useState<number | null>(null);
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [rw, setRw] = useState("Semua RW");

  const handleYearChange = (y: number) => {
    setYear(y);
    onFilterChange({ year: y, kecamatan, kelurahan, rw });
  };

  const handleRwChange = (selectedRw: string) => {
    setRw(selectedRw);
    onFilterChange({ year, kecamatan, kelurahan, rw: selectedRw });
  };

  return (
    <div className="flex space-x-4 justify-end">
      {/* Periode */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-40 justify-between font-normal"
          >
            <span>{year ?? "Periode"}</span>
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="start" className="w-64 p-0">
          <YearPicker onChange={handleYearChange} />
        </PopoverContent>
      </Popover>

      {/* Kecamatan */}
      <div className="relative w-44">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        <Input
          placeholder="Kecamatan"
          className="pl-10"
          value={kecamatan}
          onChange={(e) => {
            const value = e.target.value;
            setKecamatan(value);
            onFilterChange({ year, kecamatan: value, kelurahan, rw });
          }}
        />
      </div>

      {/* Kelurahan */}
      <div className="relative w-44">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        <Input
          placeholder="Kelurahan"
          className="pl-10"
          value={kelurahan}
          onChange={(e) => {
            const value = e.target.value;
            setKelurahan(value);
            onFilterChange({ year, kecamatan, kelurahan: value, rw });
          }}
        />
      </div>

      {/* RW Picker */}
      <RwPicker selectedRw={rw} onSelectRw={handleRwChange} />
    </div>
  );
};

export default FilterControls;
