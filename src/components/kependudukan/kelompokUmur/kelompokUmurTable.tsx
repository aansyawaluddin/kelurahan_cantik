import React from "react";
import { KelompokUmurRow } from "@/data/kelompokUmurData";

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
              <th
              rowSpan={2}
              className="px-4 py-3 border border-[#F9FBF5] align-middle"
              >
              Tahun
              </th>
              <th
              rowSpan={2}
              className="px-4 py-3 border border-[#F9FBF5] align-middle"
              >
              Kelompok Umur
              </th>
              <th
              colSpan={3}
              className="px-4 py-3 border-b-2 border-[#818181] align-middle"
              >
              Penduduk
              </th>
            </tr>
            <tr className="bg-[#F9FBF5] text-center uppercase text-sm font-medium">
              <th className="px-4 py-3 border border-[#F9FBF5]">Laki-laki</th>
              <th className="px-4 py-3 border border-[#F9FBF5]">Perempuan</th>
              <th className="px-4 py-3 border border-[#F9FBF5]">Jumlah</th>
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
