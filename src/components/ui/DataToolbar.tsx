import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";

interface DataToolbarProps {
  onExport: () => void;
  onOpenInput: () => void;
}

const DataToolbar: React.FC<DataToolbarProps> = ({ onExport, onOpenInput }) => (
  <div className="flex justify-between items-center mb-4">
    <div>
      <Button
        variant="outline"
        onClick={onExport}
        className="mr-2 bg-[#E3B025] text-white hover:bg-transparent hover:text-[#E3B025] group border-[#E3B025]"
      >
        <Upload className="w-4 h-4 mr-1 text-white group-hover:text-[#E3B025]" />
        Export
      </Button>

      <Button
        variant="outline"
        onClick={onOpenInput}
        className="bg-[#1CA6A9] text-white hover:bg-transparent hover:text-[#1CA6A9] group border-[#1CA6A9]"
      >
        <Plus className="w-4 h-4 mr-1 text-white group-hover:text-[#1CA6A9]" />
        Input
      </Button>
    </div>
  </div>
);

export default DataToolbar;
