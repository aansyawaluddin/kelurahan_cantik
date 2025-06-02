import React from "react";

type PnsRow = {
  tahun: number;
  tingkatPendidikan: string;
  lakilaki: number;
  perempuan: number;
  jumlah: number;
};

export const sampleRtData: PnsRow[] = [
  {
    tahun: 2024,
    tingkatPendidikan: "SD/Sederajat",
    lakilaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    tingkatPendidikan: "SMP/Sederajat",
    lakilaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    tingkatPendidikan: "SMA/Sederajat",
    lakilaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    tingkatPendidikan: "D3/Akademi",
    lakilaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    tingkatPendidikan: "Strata 1",
    lakilaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    tingkatPendidikan: "Strata 2",
    lakilaki: 665,
    perempuan: 702,
    jumlah: 1367,
  },
  {
    tahun: 2024,
    tingkatPendidikan: "Strata 3",
    lakilaki: 702,
    perempuan: 665,
    jumlah: 1367,
  },
  {
    tahun: 2025,
    tingkatPendidikan: "SD/Sederajat",
    lakilaki: 900,
    perempuan: 782,
    jumlah: 1682,
  },
  {
    tahun: 2025,
    tingkatPendidikan: "SMP/Sederajat",
    lakilaki: 900,
    perempuan: 782,
    jumlah: 1682,
  },
  {
    tahun: 2025,
    tingkatPendidikan: "SMA/Sederajat",
    lakilaki: 900,
    perempuan: 782,
    jumlah: 1682,
  },
];

interface PnsByEducationTableProps {
  data: PnsRow[];
}

export default function PnsByEducation({ data }: PnsByEducationTableProps) {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow p-6 text-base">
      <h2 className="text-xl font-semibold text-center mb-4">
        Tabel Visualisasi Jumlah PNS menurut Tingkat Pendidikan
      </h2>
      <div className="overflow-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-[#F9FBF5]">
              <th className="px-6 py-4 uppercase text-center font-medium">
                Tahun
              </th>
              <th className="px-6 py-4 uppercase text-center font-medium">
                Tingkat Pendidikan
              </th>
              <th className="px-6 py-4 uppercase text-center font-medium">
                Laki-laki
              </th>
              <th className="px-6 py-4 uppercase text-center font-medium">
                Perempuan
              </th>
              <th className="px-6 py-4 uppercase text-center font-medium">
                Jumlah
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
                  {row.tingkatPendidikan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {row.lakilaki}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {row.perempuan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {row.jumlah}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
