import React from "react";
import { useState } from "react";
import { Pagination, ITEMS_PER_PAGE } from "@/components/ui/Pagination";
import { DistribusiRow } from "@/data/distribusiPendudukData";

type Props = {
  data: DistribusiRow[];
};

const DistribusiTable: React.FC<Props> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
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
            {paginatedData.map((row, idx) => (
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
      <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={data.length}
              onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DistribusiTable;
