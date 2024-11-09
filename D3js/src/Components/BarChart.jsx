import React from "react";
import * as d3 from "d3";

const BarChart = ({ data, width = 500, height = 300 }) => {
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.label))
    .range([0, width])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([height, 0]);

  return (
    <svg width={width} height={height}>
      {/* Bars */}
      {data.map((d, index) => (
        <g key={index}>
          <rect
            x={xScale(d.label)}
            y={yScale(d.value)}
            width={xScale.bandwidth()}
            height={height - yScale(d.value)}
            fill="teal"
          />
          {/* Labels */}
          <text
            x={xScale(d.label) + xScale.bandwidth() / 2}
            y={yScale(d.value) - 5}
            textAnchor="middle"
            fill="black"
            fontSize="12px">
            {d.value}
          </text>
        </g>
      ))}
      {/* X-axis labels */}
      <g transform={`translate(0, ${height})`}>
        {data.map((d, index) => (
          <text
            key={index}
            x={xScale(d.label) + xScale.bandwidth() / 2}
            y={20}
            textAnchor="middle"
            fontSize="12px">
            {d.label}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default BarChart;
