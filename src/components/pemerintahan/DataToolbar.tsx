import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";

type Filters = {
  year: number | null;
  kecamatan: string;
  kelurahan: string;
  rw: string;
};

interface DataToolbarProps {
  filters: Filters;
  onExport: () => void;
  onInput: () => void;
  onFilterChange: (newFilters: Filters) => void;
}

const DataToolbar: React.FC<DataToolbarProps> = ({
  onExport,
  onInput,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Button variant="outline" onClick={onExport} className="mr-2">
          <Upload className="w-4 h-4 mr-1" /> Export
        </Button>
        <Button onClick={onInput}>
          <Plus className="w-4 h-4 mr-1" /> Input
        </Button>
      </div>
    </div>
  );
};

export default DataToolbar;
