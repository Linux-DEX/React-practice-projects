import { useRef, useEffect } from "react";
import * as d3 from "d3";

const ScrollableBarChart = () => {
  const svgRef = useRef(null);
  const xAxisRef = useRef(null);

  const data = [
    { name: "Category 1", value: 100 },
    { name: "Category 2", value: 150 },
    { name: "Category 3", value: 250 },
    { name: "Category 4", value: 300 },
    { name: "Category 5", value: 50 },
    { name: "Category 6", value: 400 },
    { name: "Category 7", value: 120 },
    { name: "Category 8", value: 220 },
    { name: "Category 9", value: 350 },
    { name: "Category 10", value: 180 },
    { name: "Category 11", value: 600 },
    { name: "Category 12", value: 450 },
  ];

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 40, left: 100 };
    const width = 1000 - margin.left - margin.right;
    const height = 2000 - margin.top - margin.bottom;

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([0, width]);

    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, height])
      .padding(0.1);

    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    chartGroup
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("y", (d, i) => y(d.name))
      .attr("width", (d) => x(d.value))
      .attr("height", y.bandwidth())
      .style("fill", "steelblue");

    chartGroup
      .selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x(d.value) - 10)
      .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .text((d) => d.value);

    chartGroup
      .append("g")
      .selectAll(".tick text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", -10)
      .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .text((d) => d.name);

    // const xAxis = d3.axisBottom(x);

    // chartGroup
    //   .append("g")
    //   .attr("class", "x-axis")
    //   .attr("transform", `translate(0, ${height})`)
    //   .call(xAxis);

    const xAxis = d3.axisBottom(x);

    d3.select(xAxisRef.current)
      .attr("width", "100%")
      .attr("height", 50)
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(xAxis);
  }, [data]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "500px",
          overflowY: "scroll",
          padding: "10px 0",
        }}
      >
        <svg ref={svgRef} width="1000" height="3000"></svg>
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          marginBottom: "10px",
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 10,
        }}
      >
        <svg ref={xAxisRef} width="1000" height="50"></svg>
      </div>
    </div>
  );
};

export default ScrollableBarChart;
