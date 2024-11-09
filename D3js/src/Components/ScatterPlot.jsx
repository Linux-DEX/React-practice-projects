import React from "react";
import * as d3 from "d3";

const ScatterPlot = ({ data, width = 500, height = 300 }) => {
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.x)])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([height, 0]);

  return (
    <svg width={width} height={height}>
      {data.map((d, index) => (
        <circle
          key={index}
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          r={5}
          fill="blue"
        />
      ))}
    </svg>
  );
};

export default ScatterPlot;
