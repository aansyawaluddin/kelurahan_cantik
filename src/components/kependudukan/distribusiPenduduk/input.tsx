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

  const [selectedGender, setSelectedGender] = useState<"male" | "female">("male");

  const [rwValues, setRwValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (let i = 1; i <= 12; i++) {
      const rwKey = `RW${i.toString().padStart(2, "0")}`;
      initial[rwKey] = "";
    }
    return initial;
  });

  const handleRwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRwValues((prev) => ({ ...prev, [name]: value }));
  };

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

          <div className="mb-6">
            <p className="font-semibold mb-5">Pilih jenis kelamin</p>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedGender("male")}
                className={`px-4 py-2 rounded ${
                  selectedGender === "male" ? "bg-teal-500 text-white" : "bg-white border"
                }`}
              >
                Laki-laki
              </button>
              <button
                onClick={() => setSelectedGender("female")}
                className={`px-4 py-2 rounded ${
                  selectedGender === "female" ? "bg-teal-500 text-white" : "bg-white border"
                }`}
              >
                Perempuan
              </button>
            </div>
          </div>

          {/* Input RW */}
          <div className="mb-6">
            <p className="font-semibold mb-5">Masukkan jumlah penduduk menurut RW</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {Object.entries(rwValues).map(([rw, value]) => (
                <div key={rw} className="flex items-center border rounded overflow-hidden">
                  <div className="bg-white border-r px-3 py-2 text-sm font-medium">{rw}</div>
                  <input
                    type="number"
                    name={rw}
                    placeholder="Jumlah Penduduk"
                    value={value}
                    onChange={handleRwChange}
                    className="flex-1 px-3 py-2 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-10">
            <button
              onClick={() => onOpenChange(false)}
              className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
            >
              Simpan
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default InputModal;
