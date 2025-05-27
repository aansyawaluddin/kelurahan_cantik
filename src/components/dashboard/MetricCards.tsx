import React from "react";
import MetricCard from "./MetricCard";

const cardsData = [
  {
    title: "Luas Wilayah",
    value: (
      <>
        <span className="text-[40px]">
          1.180 m<sup>2</sup>
        </span>
      </>
    ),
    gradient: `linear-gradient(to right, #1CA6A9 0%, #4DB9BB 25%, #A1D8DA 50%, #B0DEDF 75%, #E1F1F1 100%)`,
  },
  {
    title: "Pemerintahan",

    value: (
      <div className="flex flex-col">
        <span className="text-sm font-medium mb-1">Total</span>
        <div className="flex justify-between">
          <span className="text-[20px]">10 RW</span>
          <span className="text-[20px]">57 RT</span>
        </div>
      </div>
    ),
    iconSrc: "/icon/government.png",
  },
  {
    title: "Kependudukan",
    value: (
      <div className="flex flex-col">
        <span className="text-sm font-medium mb-1">Total Penduduk</span>
        <div>
          <span className="text-[20px]">19.053</span>
        </div>
      </div>
    ),
    iconSrc: "/icon/people.png",
  },
  {
    title: "Pendidikan",
    value: (
      <div className="flex flex-col">
        <span className="text-sm font-medium mb-1">
          Total Fasilitas Sekolah
        </span>
        <div>
          <span className="text-[20px]">35</span>
        </div>
      </div>
    ),
    iconSrc: "/icon/graduation.png",
  },
  {
    title: "Kesehatan",
    value: (
      <div className="flex flex-col">
        <span className="text-sm font-medium mb-1">
          Total Fasilitas Kesehatan
        </span>
        <div>
          <span className="text-[20px]">6</span>
        </div>
      </div>
    ),
    iconSrc: "/icon/pharmacy.png",
  },
];

const MetricCards: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
    {cardsData.map((card, idx) => (
      <MetricCard key={idx} {...card} />
    ))}
  </div>
);

export default MetricCards;
