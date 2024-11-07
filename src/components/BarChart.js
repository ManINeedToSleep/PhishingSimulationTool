// components/BarChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Get the width of the card to dynamically size the chart
    const width = chartRef.current.clientWidth;
    const height = 200; // Fixed height for better visualization

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible');

    // Set up scales based on dynamic width and fixed height
    const x = d3.scaleBand()
      .domain(data.map(d => d.device))
      .range([0, width])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.device))
      .attr('y', d => y(d.percentage))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.percentage))
      .attr('fill', '#007bff');

    // Add x and y axes
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default BarChart;
