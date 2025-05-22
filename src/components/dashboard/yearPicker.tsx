import React, { useState } from "react";

interface YearPickerProps {
  onChange?: (year: number) => void;
}

const YearPicker: React.FC<YearPickerProps> = ({ onChange }) => {
  const [decadeStart, setDecadeStart] = useState(2020);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handlePrevDecade = () => setDecadeStart(decadeStart - 10);
  const handleNextDecade = () => setDecadeStart(decadeStart + 10);

  const years = Array.from({ length: 10 }, (_, i) => decadeStart + i);

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    if (onChange) onChange(year);
  };

  return (
    <div className="w-64 p-4 border rounded-lg shadow bg-white">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevDecade}>&lt;</button>
        <span className="font-semibold">
          {decadeStart} - {decadeStart + 9}
        </span>
        <button onClick={handleNextDecade}>&gt;</button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearClick(year)}
            className={`p-2 rounded ${
              year === selectedYear
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearPicker;
