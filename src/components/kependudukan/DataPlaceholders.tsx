import React from "react";

type Props = {
  message: string;
  iconColor?: string;
};

const DataPlaceholder: React.FC<Props> = ({ message }) => (
  <div style={{ color: "gray", textAlign: "center" }}>{message}</div>
);

export default DataPlaceholder;