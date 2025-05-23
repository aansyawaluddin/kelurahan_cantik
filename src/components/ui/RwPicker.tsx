import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface RwControlProps {
  selectedRw: string;
  onSelectRw: (rw: string) => void;
}

const RW_OPTIONS = [
  "Semua RW",
  "RW 01",
  "RW 02",
  "RW 03",
  "RW 04",
  "RW 05",
  "RW 06",
  "RW 07",
  "RW 08",
  "RW 09",
  "RW 10",
];

const RwPicker: React.FC<RwControlProps> = ({ selectedRw, onSelectRw }) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" className="w-40 justify-between font-normal">
        <span>{selectedRw || "Level"}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </Button>
    </PopoverTrigger>
    <PopoverContent side="bottom" align="start" className="w-40 p-0">
      <div className="max-h-60 overflow-y-auto">
        {RW_OPTIONS.map((rw) => (
          <button
            key={rw}
            onClick={() => onSelectRw(rw)}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {rw}
          </button>
        ))}
      </div>
    </PopoverContent>
  </Popover>
);

export default RwPicker;
