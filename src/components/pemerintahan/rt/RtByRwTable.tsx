import React from "react";
import { Pagination, ITEMS_PER_PAGE } from "@/components/ui/Pagination";
import { useState } from "react";

export type RtByRwTableData = {
  tahun: number;
  rw: string;
  jumlahRt: number;
  kecamatan: string;
  kelurahan: string;
};

export interface RtByRwTableProps {
  data: RtByRwTableData[];
}

export default function RtByRwTable({ data }: RtByRwTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  return (
    <div className="mt-6 bg-white rounded-2xl shadow p-6 text-base">
      <h2 className="text-xl font-semibold text-center mb-4">
        Tabel Visualisasi Jumlah RT menurut RW
      </h2>
      <div className="overflow-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-[#F9FBF5]">
              <th className="w-1/4 px-6 py-4 uppercase text-center font-medium">Tahun</th>
              <th className="w-1/4 px-6 py-4 uppercase text-center font-medium">RW</th>
              <th className="w-1/4 px-6 py-4 uppercase text-center font-medium">Jumlah RT</th>
              <th className="w-1/4 px-6 py-4 uppercase text-center font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9FBF5]"}>
                <td className="px-6 py-4 whitespace-nowrap text-center">{row.tahun}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{row.rw}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{row.jumlahRt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => (null)}
                    className="hover:scale-110 transition-transform"
                    title="Edit"
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2H3C2.46957 2 1.96086 2.21071 1.58579 2.58579C1.21071 2.96086 1 3.46957 1 4V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V11"
                        stroke="#E3B025"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.3751 1.62523C16.7729 1.2274 17.3125 1.00391 17.8751 1.00391C18.4377 1.00391 18.9773 1.2274 19.3751 1.62523C19.7729 2.02305 19.9964 2.56262 19.9964 3.12523C19.9964 3.68784 19.7729 4.2274 19.3751 4.62523L10.3621 13.6392C10.1246 13.8765 9.8313 14.0501 9.50909 14.1442L6.63609 14.9842C6.55005 15.0093 6.45883 15.0108 6.372 14.9886C6.28517 14.9663 6.20592 14.9212 6.14254 14.8578C6.07916 14.7944 6.03398 14.7151 6.01174 14.6283C5.98949 14.5415 5.991 14.4503 6.01609 14.3642L6.85609 11.4912C6.95062 11.1693 7.12463 10.8763 7.36209 10.6392L16.3751 1.62523Z"
                        stroke="#E3B025"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
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
