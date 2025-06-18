import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import populationDensityData from "@/data/dashboard/populationDensityData";

const SummaryBox = ({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle?: string;
}) => (
  <div className="bg-white shadow rounded-xl p-4 w-full h-full flex flex-col justify-between">
    <h4 className="text-[13px] font-semibold text-black">{title}</h4>
    <div className="flex-grow" />
    <div className="flex justify-between items-end mt-4">
      <p className="text-[20px] font-bold text-black">{value}</p>
      {subtitle && (
        <p className="text-[20px] font-bold text-black text-right">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

export default function PopulationDensity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
      <Card className="col-span-2 h-full">
        <CardContent className="px-4 pt-2 pb-6 h-full flex flex-col">
          <h2 className="text-center font-semibold text-lg">
            Kepadatan Penduduk Menurut RW
          </h2>
          <p className="text-center text-[15px] text-black">Satuan: Jiwa/km²</p>
          <ResponsiveContainer width="100%" height={440}>
            <BarChart
              layout="vertical"
              data={populationDensityData}
              margin={{ top: 5, right: 20, bottom: 20, left: 5 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="rw" />
              <Tooltip cursor={false} />
              <Legend verticalAlign="bottom" height={20} />
              <Bar
                dataKey="kepadatan"
                name="Kepadatan Penduduk (per km²)"
                fill="#facc15"
              >
                <LabelList dataKey="kepadatan" position="right" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4 justify-between h-full">
        <SummaryBox
          title="RW Terpadat"
          value="RW 09"
          subtitle="248.477 Jiwa/km²"
        />
        <SummaryBox
          title="RW Penduduk Terbanyak"
          value="RW 04"
          subtitle="3.839 Orang"
        />
        <SummaryBox
          title="RW Terlonggar"
          value="RW 05"
          subtitle="7.437 Jiwa/km²"
        />
        <SummaryBox
          title="RW Penduduk Tersedikit"
          value="RW 10"
          subtitle="592 Orang"
        />
      </div>
    </div>
  );
}
