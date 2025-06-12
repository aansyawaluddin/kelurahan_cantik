import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { samplePnsData } from "@/components/pemerintahan/pns/PnsByEducation";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

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

// Warna gradasi dari soft pink ke dark red
const COLOR_LOW: [number, number, number] = [255, 200, 200];
const COLOR_HIGH: [number, number, number] = [139, 0, 0];

// Fungsi interpolasi warna
function interpolateColor(
  low: [number, number, number],
  high: [number, number, number],
  factor: number
): string {
  const result = low.map((l, i) => Math.round(l + factor * (high[i] - l)));
  return `rgb(${result.join(",")})`;
}

export default function Visualisasi() {
  const data: PnsRow[] = samplePnsData;

  const pendidikanTertentu = [
    "SD/Sederajat",
    "SMP/Sederajat",
    "SMA/Sederajat",
    "D1",
    "D2",
    "D3",
    "D4",
    "Strata 1",
    "Strata 2",
    "Strata 3",
  ];

  // Gabungkan jumlah berdasarkan tingkat pendidikan
  const aggregatedData = data.reduce((acc, curr) => {
    if (pendidikanTertentu.includes(curr.tingkatPendidikan)) {
      if (!acc[curr.tingkatPendidikan]) {
        acc[curr.tingkatPendidikan] = 0;
      }
      acc[curr.tingkatPendidikan] += curr.jumlah;
    }
    return acc;
  }, {} as Record<string, number>);

    const labels = Object.keys(aggregatedData);
    const values = Object.values(aggregatedData);

  // Pie chart data
  const pieData = useMemo(() => {
    const max = Math.max(...values);
    const min = Math.min(...values);

    const backgroundColor = values.map((val) => {
      const factor = (val - min) / (max - min || 1); // Hindari divide by 0
      return interpolateColor(COLOR_LOW, COLOR_HIGH, factor);
    });

    return {
      labels,
      datasets: [
        {
          label: "Jumlah PNS",
          data: values,
          backgroundColor,
          borderWidth: 1,
        },
      ],
    };
  }, [labels, values]);

  // Pie chart options
  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Sembunyikan legenda
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const dataArray = context.dataset.data as number[];
            const total = dataArray.reduce((sum, val) => sum + val, 0);
            const currentValue = Number(context.parsed);
            const percentage = ((currentValue / total) * 100).toFixed(1);
            return `${context.label}: ${currentValue} (${percentage}%)`;
          },
        },
      },
      datalabels: {
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[0];
          const dataArr = dataset.data as number[];
          const total = dataArr.reduce((sum, val) => sum + val, 0);
          const percentage = ((Number(value) / total) * 100).toFixed(1);
          const label = context.chart.data.labels?.[context.dataIndex];
          return `${label}\n${percentage}%`;
        },
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center font-bold text-black text-[20px] mb-10">
        Persentase Jumlah PNS menurut Tingkat Pendidikan
      </h1>
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <Pie data={pieData} options={options} />
      </div>
    </div>
  );
}
