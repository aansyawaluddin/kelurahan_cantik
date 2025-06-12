import React from "react";

type PnsRow = {
  tahun: number;
  tingkatPendidikan: string;
  lakilaki: number;
  perempuan: number;
  rw: string;
  kecamatan: string;
  kelurahan: string;
  jumlah: number;
};

export const samplePnsData: PnsRow[] = [
  {
    tahun: 2024,
    tingkatPendidikan: "SD/Sederajat",
    lakilaki: 500,
    perempuan: 600,
    jumlah: 1100,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "SMP/Sederajat",
    lakilaki: 700,
    perempuan: 600,
    jumlah: 1300,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "SMA/Sederajat",
    lakilaki: 600,
    perempuan: 600,
    jumlah: 1200,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "D3",
    lakilaki: 700,
    perempuan: 700,
    jumlah: 1400,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "D4",
    lakilaki: 700,
    perempuan: 242,
    jumlah: 942,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "D1",
    lakilaki: 300,
    perempuan: 242,
    jumlah: 542,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "D2",
    lakilaki: 400,
    perempuan: 242,
    jumlah: 642,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "Strata 1",
    lakilaki: 500,
    perempuan: 500,
    jumlah: 1000,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "Strata 2",
    lakilaki: 750,
    perempuan: 750,
    jumlah: 1500,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2024,
    tingkatPendidikan: "Strata 3",
    lakilaki: 702,
    perempuan: 100,
    jumlah: 802,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2025,
    tingkatPendidikan: "SD/Sederajat",
    lakilaki: 900,
    perempuan: 800,
    jumlah: 1700,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",

  },
  {
    tahun: 2025,
    tingkatPendidikan: "SMP/Sederajat",
    lakilaki: 900,
    perempuan: 423,
    jumlah: 1323,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
  },
  {
    tahun: 2025,
    tingkatPendidikan: "SMA/Sederajat",
    lakilaki: 900,
    perempuan: 121,
    jumlah: 1021,
    kecamatan: "Tamalanrea",
    kelurahan: "Bira",
    rw: "RW 01",
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
