import React from "react";
import MetricCard from "./MetricCard";

const cardsData = [
  {
    title: "Luas Wilayah",
    value: (
      <>
        <span>
          1.180 m<sup>2</sup>
        </span>
      </>
    ),
    gradient: `linear-gradient(to right, #1CA6A9 0%, #4DB9BB 25%, #A1D8DA 50%, #B0DEDF 75%, #E1F1F1 100%)`,
  },
  {
    title: "Pemerintahan",
    value: "10 RW  57 RT",
    iconSrc: "/icon/government.png",
  },
  { title: "Kependudukan", value: "19.053", iconSrc: "/icon/people.png" },
  { title: "Pendidikan", value: "35", iconSrc: "/icon/graduation.png" },
  { title: "Kesehatan", value: "6", iconSrc: "/icon/pharmacy.png" },
];

const MetricCards: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
    {cardsData.map((card, idx) => (
      <MetricCard key={idx} {...card} />
    ))}
  </div>
);

export default MetricCards;
