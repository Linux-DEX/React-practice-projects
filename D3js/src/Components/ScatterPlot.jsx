import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const ScatterPlot = ({ data, width = 500, height = 400 }) => {
  const svgRef = useRef(null);

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.x)])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.y)])
    .range([height, 0]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height - 20})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("font-size", "12px")
      .attr("fill", "black");

    svg
      .select(".y-axis")
      .attr("transform", "translate(20, 0)") 
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .attr("font-size", "12px")
      .attr("fill", "black");
  }, [data, height, xScale, yScale]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g className="x-axis" />
      <g className="y-axis" />
      {data.map((d, index) => (
        <g key={index}>
          <circle cx={xScale(d.x)} cy={yScale(d.y)} r={5} fill="blue" />
          <text
            x={xScale(d.x) + 8}
            y={yScale(d.y)}
            fontSize="12"
            fill="black"
            alignmentBaseline="middle"
          >
            {d.text}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default ScatterPlot;
