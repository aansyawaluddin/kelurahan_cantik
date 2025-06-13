import React, { useState } from "react";
import { ITEMS_PER_PAGE, Pagination } from "@/components/ui/Pagination";

export type PnsByEducationData = {
  tahun: number;
  tingkatPendidikan: string;
  lakilaki: number;
  perempuan: number;
  jumlah: number;
  kecamatan: string;
  kelurahan: string;
  rw: string;
};

export interface PnsByEducationProps {
  data: PnsByEducationData[];
}

export default function PnsByEducation({ data }: PnsByEducationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
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
            {paginatedData.map((row: PnsByEducationData, idx: number) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={data.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
