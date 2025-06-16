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
import schoolChartData from "@/data/dashboard/schoolChartData";

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
              data={schoolChartData}
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
