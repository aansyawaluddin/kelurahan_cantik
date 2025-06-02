import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import FilterControls from "@/components/ui/FilterControls";
import { X } from "lucide-react";

// Define the shape of our filter state
type Filters = {
  year: number | null;
  kecamatan: string;
  kelurahan: string;
  rw: string;
};

interface InputModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InputModal: React.FC<InputModalProps> = ({ open, onOpenChange }) => {
  // Filter state managed here
  const [filters, setFilters] = useState<Filters>({
    year: null,
    kecamatan: "",
    kelurahan: "",
    rw: "Semua RW",
  });

  // Handle filter changes coming from FilterControls
  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        {/* modal content */}
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2
            w-[150vh]
            h-[80vh]       
            -translate-x-1/2 -translate-y-1/2
            bg-white p-6 rounded-lg
            shadow-lg
            overflow-y-auto
        "
        >
          {/* header */}
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold">
              Input Data
            </Dialog.Title>
            <Dialog.Close asChild>
              <button>
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          {/* filter controls */}
          <div className="flex justify-start items-center mb-6">
            <FilterControls onFilterChange={handleFilterChange} />
          </div>

          <div className="flex justify-between items-center mb-4 font-bold text-black">
            <span>Masukkan jumlah RT menurut RW</span>
            <button
              onClick={() => onOpenChange(false)}
              className="px-5 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Simpan
            </button>
          </div>

          {/* input rt */}
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 15 }).map((_, idx) => (
              <div key={idx} className="border rounded-lg p-4 flex flex-col">
                <h3 className="font-medium mb-5">
                  RT {String(idx + 1).padStart(2, "0")}
                </h3>
                <div>
                  <div>
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default InputModal;
