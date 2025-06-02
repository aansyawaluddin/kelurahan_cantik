import React from "react";

export type KelompokUmurRow = {
  tahun: number;
  kelompokUmur: string;
  lakiLaki: number;
  perempuan: number;
  jumlah: number;
};

// Sample data bisa tetap sebagai fallback atau referensi
export const SampleUmurData: KelompokUmurRow[] = [
  {
    tahun: 2024,
    kelompokUmur: "0-4",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "5-9",
    lakiLaki: 702,
    perempuan: 685,
    jumlah: 1387,
  },
  {
    tahun: 2024,
    kelompokUmur: "10-14",
    lakiLaki: 702,
    perempuan: 685,
    jumlah: 1387,
  },
  {
    tahun: 2024,
    kelompokUmur: "15-19",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "20-24",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "25-29",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "30-34",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "35-39",
    lakiLaki: 702,
    perempuan: 685,
    jumlah: 1387,
  },
  {
    tahun: 2024,
    kelompokUmur: "40-44",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    kelompokUmur: "45-49",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
];

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
