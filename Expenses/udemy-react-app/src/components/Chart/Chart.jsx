import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ data }) => {
  const dataPointValues = data.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {data.map((item) => (
        <ChartBar key={item.id} value={item.value} maxValue={totalMaximum} label={item.label} />
      ))}
    </div>
  );
};

export default Chart;
