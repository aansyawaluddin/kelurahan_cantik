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
        className="mr-2 bg-[#E3B025] text-white"
      >
        <Upload className="w-4 h-4 mr-1 text-white" />
        Export
      </Button>
      <Button onClick={onOpenInput} className="text-white bg-[#1CA6A9]">
        <Plus className="w-4 h-4 mr-1 text-white" />
        Input
      </Button>
    </div>
  </div>
);

export default DataToolbar;
