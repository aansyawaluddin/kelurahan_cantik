import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import FilterControls from "@/components/ui/FilterControls";
import { X } from "lucide-react";

type Filters = {
  year: number | null;
  kecamatan: string;
  kelurahan: string;
  rw: string;
};

type PnsInput = {
  id: string;
  label: string;
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

  const pnsData: PnsInput[] = [
    { id: "sd", label: "SD/Sederajat" },
    { id: "smp", label: "SMP/Sederajat" },
    { id: "sma", label: "SMA/Sederajat" },
    { id: "d3", label: "D3/Akademi" },
    { id: "strata1", label: "Strata 1" },
    { id: "strata2", label: "Strata 2" },
    { id: "strata3", label: "Statra 3" },
  ];

  // State untuk menyimpan nilai Laki-laki dan Perempuan per RT
  const [pnsValues, setpnsValues] = useState<Record<string, string>>(() =>
    pnsData.reduce((acc, curr) => {
      acc[`${curr.id}_male`] = "";
      acc[`${curr.id}_female`] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  // Handle filter changes coming from FilterControls
  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  // Handle change untuk input Laki-laki / Perempuan
  const handlePnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setpnsValues((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            <span>Masukkan jumlah PNS berdasarkan jenis kelamin per RT</span>
            <button
              onClick={() => onOpenChange(false)}
              className="px-5 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Simpan
            </button>
          </div>

          {/* input PNS */}
          <div className="grid grid-cols-3 gap-4">
            {pnsData.map((pns) => (
              <div key={pns.id} className="border rounded-lg p-4 flex flex-col">
                <h3 className="font-medium mb-4">{pns.label}</h3>

                <div className="grid grid-cols-2 gap-3">
                  {/* Kolom Laki-laki */}
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Laki-laki</label>
                    <input
                      type="number"
                      name={`${pns.id}_male`}
                      value={pnsValues[`${pns.id}_male`]}
                      onChange={handlePnsChange}
                      className="w-full border rounded px-2 py-2"
                    />
                  </div>

                  {/* Kolom Perempuan */}
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Perempuan</label>
                    <input
                      type="number"
                      name={`${pns.id}_female`}
                      value={pnsValues[`${pns.id}_female`]}
                      onChange={handlePnsChange}
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
