import React from "react";
import { KelompokUmurRow } from "@/data/dashboard/kelompokUmurData";

// Definisikan interface props agar komponen bisa menerima data secara dinamis
interface KelompokUmurTableProps {
  data: KelompokUmurRow[];
}

const KelompokUmurTable: React.FC<KelompokUmurTableProps> = ({ data }) => {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow p-6 text-base">
      <h2 className="text-xl font-semibold text-center mb-4">
        Tabel Visualisasi Kelompok Umur
      </h2>
      <div className="overflow-auto">
        <table className="w-full table-auto border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#F9FBF5] text-center uppercase text-sm font-bold">
              <th className="px-4 py-3 border-b border-white">Tahun</th>
              <th className="px-4 py-3 border-b border-white">Kelompok Umur</th>
              <th colSpan={3} className="px-4 py-3 border-b border-[#818181]">
                Penduduk
              </th>
            </tr>
            <tr className="bg-[#F9FBF5] text-center uppercase text-sm font-medium">
              <th className="px-4 py-3 border-t border-white"></th>
              <th className="px-4 py-3 border-t border-white"></th>
              <th className="px-4 py-3 border-t border-[#818181]">Laki-laki</th>
              <th className="px-4 py-3 border-t border-[#818181]">Perempuan</th>
              <th className="px-4 py-3 border-t border-[#818181]">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F9FBF5]"}
              >
                <td className="px-4 py-3 text-center">{row.tahun}</td>
                <td className="px-4 py-3 text-center">{row.kelompokUmur}</td>
                <td className="px-4 py-3 text-center">{row.lakiLaki}</td>
                <td className="px-4 py-3 text-center">{row.perempuan}</td>
                <td className="px-4 py-3 text-center">{row.jumlah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KelompokUmurTable;
