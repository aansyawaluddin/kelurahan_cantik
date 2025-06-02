import React from "react";

export type DistribusiRow = {
  tahun: number;
  rw: string;
  lakiLaki: number;
  perempuan: number;
  jumlah: number;
  persenPenduduk: number;
  persenKepadatan: number;
  rasioJenisKelamin: number;
};

export const sampelDistribusiData: DistribusiRow[] = [
  {
    tahun: 2024,
    rw: "RW 01",
    lakiLaki: 702,
    perempuan: 665,
    jumlah: 1367,
    persenPenduduk: 7.17,
    persenKepadatan: 13885.67,
    rasioJenisKelamin: 105.6,
  },
  {
    tahun: 2024,
    rw: "RW 02",
    lakiLaki: 642,
    perempuan: 597,
    jumlah: 1239,
    persenPenduduk: 6.5,
    persenKepadatan: 12583.25,
    rasioJenisKelamin: 107.5,
  },
  {
    tahun: 2024,
    rw: "RW 03",
    lakiLaki: 827,
    perempuan: 771,
    jumlah: 1598,
    persenPenduduk: 8.38,
    persenKepadatan: 16219.32,
    rasioJenisKelamin: 107.3,
  },
  {
    tahun: 2024,
    rw: "RW 04",
    lakiLaki: 560,
    perempuan: 538,
    jumlah: 1098,
    persenPenduduk: 5.76,
    persenKepadatan: 11143.65,
    rasioJenisKelamin: 104.1,
  },
  {
    tahun: 2024,
    rw: "RW 05",
    lakiLaki: 687,
    perempuan: 631,
    jumlah: 1318,
    persenPenduduk: 6.91,
    persenKepadatan: 13377.41,
    rasioJenisKelamin: 108.9,
  },
  {
    tahun: 2024,
    rw: "RW 06",
    lakiLaki: 807,
    perempuan: 756,
    jumlah: 1563,
    persenPenduduk: 8.2,
    persenKepadatan: 15860.38,
    rasioJenisKelamin: 106.8,
  },
  {
    tahun: 2024,
    rw: "RW 07",
    lakiLaki: 802,
    perempuan: 774,
    jumlah: 1576,
    persenPenduduk: 8.26,
    persenKepadatan: 16001.52,
    rasioJenisKelamin: 103.6,
  },
  {
    tahun: 2024,
    rw: "RW 08",
    lakiLaki: 589,
    perempuan: 566,
    jumlah: 1155,
    persenPenduduk: 6.05,
    persenKepadatan: 11723.79,
    rasioJenisKelamin: 104.1,
  },
  {
    tahun: 2024,
    rw: "RW 09",
    lakiLaki: 670,
    perempuan: 630,
    jumlah: 1300,
    persenPenduduk: 6.82,
    persenKepadatan: 13197.96,
    rasioJenisKelamin: 106.3,
  },
  {
    tahun: 2024,
    rw: "RW 10",
    lakiLaki: 889,
    perempuan: 850,
    jumlah: 1739,
    persenPenduduk: 9.12,
    persenKepadatan: 17678.46,
    rasioJenisKelamin: 104.6,
  },
  // Tambahkan entri lain sesuai kebutuhan
];

type Props = {
  data: DistribusiRow[];
};

const DistribusiTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow p-6 text-base">
      <h2 className="text-xl font-semibold text-center mb-4">
        Tabel Visualisasi Data RW
      </h2>
      <div className="overflow-auto">
        <table className="w-full text-sm text-center border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#F9FBF5]">
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
                RW
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 border-b-2 border-[#818181] align-middle"
              >
                Penduduk
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 border-b-2 border-[#818181] align-middle"
              >
                Persentase
              </th>
            </tr>
            <tr className="bg-[#F9FBF5]">
              <th className="px-4 py-3 border border-[#F9FBF5]">Laki-laki</th>
              <th className="px-4 py-3 border border-[#F9FBF5]">Perempuan</th>
              <th className="px-4 py-3 border border-[#F9FBF5]">Jumlah</th>
              <th className="px-4 py-3 border border-[#F9FBF5]">%Penduduk</th>
              <th className="px-4 py-3 border border-[#F9FBF5]">%Kepadatan</th>
              <th className="px-4 py-3 border border-[#F9FBF5]">
                %Rasio Jenis Kelamin
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F9FBF5]"}
              >
                <td className="px-4 py-3 text-center">{row.tahun}</td>
                <td className="px-4 py-3 text-center">{row.rw}</td>
                <td className="px-4 py-3 text-center">{row.lakiLaki}</td>
                <td className="px-4 py-3 text-center">{row.perempuan}</td>
                <td className="px-4 py-3 text-center">{row.jumlah}</td>
                <td className="px-4 py-3 text-center">
                  {row.persenPenduduk.toFixed(2).replace(".", ",")}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.persenKepadatan.toLocaleString("id-ID", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.rasioJenisKelamin.toFixed(1).replace(".", ",")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DistribusiTable;
