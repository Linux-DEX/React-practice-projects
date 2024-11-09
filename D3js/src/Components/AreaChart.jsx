import React from "react";
import * as d3 from "d3";

const AreaChart = ({ data, width = 500, height = 300 }) => {
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d)])
    .range([height, 0]);

  const area = d3
    .area()
    .x((d, i) => xScale(i))
    .y0(height)
    .y1((d) => yScale(d));

  return (
    <svg width={width} height={height}>
      <path d={area(data)} fill="lightblue" />
    </svg>
  );
};

export default AreaChart;
