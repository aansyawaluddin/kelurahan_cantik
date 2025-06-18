import React, { useState } from "react";
import YearPicker from "@/components/ui/yearPicker";
import { Input } from "@/components/ui/input";
import RwPicker from "@/components/ui/RwPicker";
import { areaData } from "@/data/areaData";
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
  const [kecamatan, setKecamatan] = useState<string>("");
  const [kelurahan, setKelurahan] = useState<string>("");
  const [rw, setRw] = useState<string>("Semua RW");
  const [openYear, setOpenYear] = useState(false);
  const [openKec, setOpenKec] = useState<boolean>(false);
  const [openKel, setOpenKel] = useState<boolean>(false);
  const [openRw, setOpenRw] = useState<boolean>(false);

  const kecamatanList = Object.keys(areaData);
  const kelurahanList = kecamatan ? areaData[kecamatan] || [] : [];

  const handleYearChange = (y: number) => {
    setYear(y);
    setOpenYear(false);
    onFilterChange({ year: y, kecamatan, kelurahan, rw });
  };

  const selectKecamatan = (sel: string) => {
    setKecamatan(sel);
    setKelurahan("");
    setOpenKec(false);
    onFilterChange({ year, kecamatan: sel, kelurahan: "", rw });
  };

  const selectKelurahan = (sel: string) => {
    setKelurahan(sel);
    setOpenKel(false);
    onFilterChange({ year, kecamatan, kelurahan: sel, rw });
  };

  const handleRwChange = (selectedRw: string) => {
    setRw(selectedRw);
    setOpenRw(false);
    onFilterChange({ year, kecamatan, kelurahan, rw: selectedRw });
  };

  return (
    <div className="flex space-x-4 justify-end items-end">
      {/* Periode */}
      <Popover open={openYear} onOpenChange={setOpenYear}>
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

      {/* Kecamatan Dropdown */}
      <Popover open={openKec} onOpenChange={setOpenKec}>
        <PopoverTrigger asChild>
          <div className="relative w-55">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <Input
              placeholder="Kecamatan"
              readOnly
              className="pl-10 cursor-pointer"
              value={kecamatan}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="start" className="w-55">
          <div className="max-h-48 overflow-y-auto">
            {kecamatanList.map((k) => (
              <div
                key={k}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => selectKecamatan(k)}
              >
                {k}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Kelurahan Dropdown */}
      <Popover open={openKel} onOpenChange={setOpenKel}>
        <PopoverTrigger asChild>
          <div className="relative w-55">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <Input
              placeholder="Kelurahan"
              readOnly
              disabled={!kecamatan}
              className="pl-10 cursor-pointer"
              value={kelurahan}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="start" className="w-55">
          <div className="max-h-48 overflow-y-auto">
            {kelurahanList.map((k) => (
              <div
                key={k}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => selectKelurahan(k)}
              >
                {k}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* RW Picker */}
      <RwPicker
        selectedRw={rw}
        onSelectRw={handleRwChange}
        open={openRw}
        onOpenChange={setOpenRw}
      />
    </div>
  );
};

export default FilterControls;
