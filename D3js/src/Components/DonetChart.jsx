import React from "react";
import * as d3 from "d3";

const DonutChart = ({ data, width = 300, height = 300 }) => {
  const radius = Math.min(width, height) / 2;
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const pie = d3.pie().value((d) => d.value)(data);
  const arc = d3
    .arc()
    .innerRadius(radius * 0.5)
    .outerRadius(radius);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {pie.map((slice, index) => (
          <g key={index}>
            <path
              d={arc(slice)}
              fill={color(index)}
              stroke="white"
              strokeWidth="2"
            />
            <text
              transform={`translate(${arc.centroid(slice)})`}
              textAnchor="middle"
              fontSize="10"
              fill="black">
              {slice.data.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default DonutChart;
