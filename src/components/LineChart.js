// components/LineChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Get the width of the card to dynamically size the chart
    const width = chartRef.current.clientWidth;
    const height = 200; // Fixed height for better visualization

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible');

    // Set up scales
    const x = d3.scalePoint()
      .domain(data.map(d => d.month))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.newVisitors, d.returningVisitors))])
      .range([height, 0]);

    // Define the line generators
    const lineNew = d3.line()
      .x(d => x(d.month))
      .y(d => y(d.newVisitors));

    const lineReturning = d3.line()
      .x(d => x(d.month))
      .y(d => y(d.returningVisitors));

    // Draw the lines
    svg.append('path')
      .datum(data)
      .attr('d', lineNew)
      .attr('fill', 'none')
      .attr('stroke', '#007bff')
      .attr('stroke-width', 2);

    svg.append('path')
      .datum(data)
      .attr('d', lineReturning)
      .attr('fill', 'none')
      .attr('stroke', '#dc3545')
      .attr('stroke-width', 2);

    // Add x and y axes
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default LineChart;
