import React from "react";
import * as d3 from "d3";

const BubbleChart = ({ data, width = 500, height = 300 }) => {
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.x)])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([height, 0]);

  const sizeScale = d3
    .scaleSqrt()
    .domain([0, d3.max(data, (d) => d.size)])
    .range([5, 20]);

  return (
    <svg width={width} height={height}>
      {data.map((d, index) => (
        <circle
          key={index}
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          r={sizeScale(d.size)}
          fill="purple"
          opacity={0.7}
        />
      ))}
    </svg>
  );
};

export default BubbleChart;
