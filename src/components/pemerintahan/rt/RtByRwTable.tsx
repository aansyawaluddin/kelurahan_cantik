import React from "react";

type RtRow = {
  tahun: number;
  rw: string;
  jumlahRt: number;
  kecamatan: string;
  kelurahan: string;
};

export const sampleRtData: RtRow[] = [
  { tahun: 2023, rw: "RW 01", jumlahRt: 5, kecamatan: "Tamalate", kelurahan: "Maccini Sombala" },
  { tahun: 2023, rw: "RW 02", jumlahRt: 4, kecamatan: "Tamalate", kelurahan: "Mangasa" },
  { tahun: 2023, rw: "RW 03", jumlahRt: 6, kecamatan: "Tamalate", kelurahan: "Parang Tambung" },

  { tahun: 2024, rw: "RW 01", jumlahRt: 5, kecamatan: "Tamalate", kelurahan: "Maccini Sombala" },
  { tahun: 2024, rw: "RW 02", jumlahRt: 4, kecamatan: "Tamalate", kelurahan: "Mangasa" },
  { tahun: 2024, rw: "RW 03", jumlahRt: 6, kecamatan: "Tamalate", kelurahan: "Parang Tambung" },

  { tahun: 2025, rw: "RW 01", jumlahRt: 5, kecamatan: "Tamalate", kelurahan: "Maccini Sombala" },
  { tahun: 2025, rw: "RW 02", jumlahRt: 4, kecamatan: "Tamalate", kelurahan: "Mangasa" },
  { tahun: 2025, rw: "RW 03", jumlahRt: 6, kecamatan: "Tamalate", kelurahan: "Parang Tambung" },

  { tahun: 2026, rw: "RW 01", jumlahRt: 5, kecamatan: "Tamalate", kelurahan: "Maccini Sombala" },
];


interface RtByRwTableProps {
  data: RtRow[];
}

export default function RtByRwTable({ data }: RtByRwTableProps) {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow p-6 text-base">
      <h2 className="text-xl font-semibold text-center mb-4">
        Tabel Visualisasi Jumlah RT menurut RW
      </h2>
      <div className="overflow-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-[#F9FBF5]">
              <th className="w-1/3 px-6 py-4 uppercase text-center font-medium">
                Tahun
              </th>
              <th className="w-1/3 px-6 py-4 uppercase text-center font-medium">
                RW
              </th>
              <th className="w-1/3 px-6 py-4 uppercase text-center font-medium">
                Jumlah RT
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F9FBF5]"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {row.tahun}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {row.rw}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {row.jumlahRt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
