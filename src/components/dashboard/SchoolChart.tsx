import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const schoolData = [
  { level: "TK", "2022/2023": 12, "2023/2024": 12 },
  { level: "SD", "2022/2023": 9, "2023/2024": 9 },
  { level: "SMP", "2022/2023": 7, "2023/2024": 7 },
  { level: "SMA", "2022/2023": 5, "2023/2024": 5 },
  { level: "SMK", "2022/2023": 2, "2023/2024": 2 },
];

function SchoolFacilitiesChart() {
  return (
    <div className="w-1/2 mx-2">
      <Card>
        <CardHeader>
          <CardTitle>
            Jumlah Fasilitas Sekolah Berdasarkan Tingkat Pendidikan
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={schoolData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip cursor={false} />
              <Legend />
              <Bar dataKey="2022/2023" fill="#8B0000" />
              <Bar dataKey="2023/2024" fill="#DAA520" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default SchoolFacilitiesChart;
