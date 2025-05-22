import React from "react";

export interface MetricCardProps {
  title: string;
  value: React.ReactNode;
  iconSrc?: string;
  gradient?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  iconSrc,
  gradient,
}) => (
  <div
    className={`bg-white rounded-xl p-4 border border-gray-200 flex flex-col justify-start h-full shadow`}
    style={gradient ? { backgroundImage: gradient } : undefined}
  >
    {iconSrc && (
      <div className="flex items-center mb-2">
        <img src={iconSrc} alt={title} className="w-5 h-5 mr-2" />
        <p className="text-sm font-bold text-black">{title}</p>
      </div>
    )}
    {!iconSrc && <p className="text-white text-sm mb-2">{title}</p>}
    <div className="mt-1 text-sm font-bold text-black">{value}</div>
  </div>
);

export default MetricCard;
