import React, { useState } from "react";
import YearPicker from "@/components/dashboard/yearPicker";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export interface FilterProps {
  onFilterChange: (filters: {
    year: number | null;
    kecamatan: string;
    kelurahan: string;
  }) => void;
}

const FilterControls: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [year, setYear] = useState<number | null>(null);
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");

  const handleYearChange = (y: number) => {
    setYear(y);
    onFilterChange({ year: y, kecamatan, kelurahan });
  };

  return (
    <div className="flex space-x-4 items-end">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Periode
        </label>
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
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kecamatan
        </label>
        <Input
          placeholder="Kecamatan"
          className="w-44"
          value={kecamatan}
          onChange={(e) => {
            setKecamatan(e.target.value);
            onFilterChange({ year, kecamatan: e.target.value, kelurahan });
          }}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kelurahan
        </label>
        <Input
          placeholder="Kelurahan"
          className="w-44"
          value={kelurahan}
          onChange={(e) => {
            setKelurahan(e.target.value);
            onFilterChange({ year, kecamatan, kelurahan: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default FilterControls;
