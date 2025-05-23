import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, Treemap } from "recharts";

const populationData = [
  { name: "RW 01", value: 1177 },
  { name: "RW 02", value: 626 },
  { name: "RW 03", value: 639 },
  { name: "RW 04", value: 672 },
  { name: "RW 05", value: 1239 },
  { name: "RW 06", value: 777 },
  { name: "RW 07", value: 1221 },
  { name: "RW 08", value: 1950 },
  { name: "RW 09", value: 949 },
  { name: "RW 10", value: 1134 },
];

// Hitung sekali min & max
const values = populationData.map((d) => d.value);
const minValue = Math.min(...values);
const maxValue = Math.max(...values);

interface CustomTreemapProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  name?: string;
  value?: number;
}

function CustomizedTreemapContent(props: CustomTreemapProps) {
  const { x = 0, y = 0, width = 0, height = 0, name = "", value = 0 } = props;

  // skala opacity 0.2–1.0 berdasarkan value
  const opacity = ((value - minValue) / (maxValue - minValue)) * 0.8 + 0.2;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{ fill: `rgba(139, 0, 0, ${opacity})` }}
      />
      {width > 60 && height > 40 && (
        <>
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={12}
            fontWeight="bold"
          >
            {name}
          </text>
          <text x={x + 4} y={y + 34} fill="#fff" fontSize={10}>
            {value}
          </text>
        </>
      )}
    </g>
  );
}

export default function PopulationTreemap() {
  return (
    <div className="w-1/2 mx-2">
      <Card>
        <CardHeader>
          <CardTitle>Jumlah Penduduk tiap RW</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <Treemap
              data={populationData}
              dataKey="value"
              aspectRatio={4 / 3}
              stroke="#fff"
              content={<CustomizedTreemapContent />}
            />
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
