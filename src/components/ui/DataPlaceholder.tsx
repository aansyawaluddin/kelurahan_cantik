import React from "react";

interface PlaceholderProps {
  message: string;
  iconColor?: string;
}

const DataPlaceholder: React.FC<PlaceholderProps> = ({
  message,
  iconColor = "text-gray-600",
}) => {
  return (
    <div className="mt-8 border rounded-lg border-gray-200 h-80 flex items-center justify-center">
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-auto h-12 w-12 ${iconColor}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2-2M19 12a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <p className="mt-2 text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default DataPlaceholder;
