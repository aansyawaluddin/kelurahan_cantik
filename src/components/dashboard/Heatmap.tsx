import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, Treemap } from "recharts";
import heatmapData from "@/data/dashboard/heatmapData";

// Hitung sekali min & max
const values = heatmapData.map((d) => d.value);
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

const COLOR_LOW: [number, number, number] = [255, 200, 200];
const COLOR_HIGH: [number, number, number] = [139, 0, 0];

function interpolateColor(
  color1: [number, number, number],
  color2: [number, number, number],
  factor: number
): string {
  const result = color1.map((c, i) =>
    Math.round(c + (color2[i] - c) * factor)
  ) as [number, number, number];
  return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}

function CustomizedTreemapContent(props: CustomTreemapProps) {
  const { x = 0, y = 0, width = 0, height = 0, name = "", value = 0 } = props;

  // normalisasi 0–1
  const factor = (value - minValue) / (maxValue - minValue);
  const fillColor = interpolateColor(COLOR_LOW, COLOR_HIGH, factor);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{ fill: fillColor, stroke: "#fff", strokeWidth: 1 }}
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
          <ResponsiveContainer width="100%" height={315}>
            <Treemap
              data={heatmapData}
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
