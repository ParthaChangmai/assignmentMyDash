import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

const BarChartD = ({ width, height, data }) => {
	const ref = useRef();

	useEffect(() => {
		const svg = d3
			.select(ref.current)
			.attr('width', width)
			.attr('height', height);

		// const textbar = svg
		// 	.selectAll('text')
		// 	.data(data)
		// 	.text((d) => d);
		const selection = svg.selectAll('rect').data(data);

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(data)])
			.range([0, height - 100]);

		selection
			.transition()
			.duration(300)
			.attr('height', (d) => yScale(d))
			.attr('y', (d) => height - yScale(d));

		selection
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * 45)
			.attr('y', (d) => height)
			.attr('width', 40)
			.attr('height', 0)
			.attr('fill', () => {
				return 'hsl(' + Math.random() * 70 + ',100%,50%)';
			})
			.style('overlay', 'hidden')
			.transition()
			.duration(300)
			.attr('height', (d) => yScale(d))
			.attr('y', (d) => height - yScale(d));

		// textbar
		// 	.enter()
		// 	.append('text')
		// 	.text(function (d) {
		// 		return data[d];
		// 	})
		// 	.attr('x', (d, i) => i * 46)
		// 	.attr('y', (d) => height - 2)
		// 	.attr('fill', 'black')
		// 	.attr('font-family', 'Times New Roman')
		// 	.attr('font-weight', 'bold')
		// 	.attr('fill', 'black')
		// 	.style('margin-left', '20px');

		selection
			.exit()
			.transition()
			.duration(300)
			.attr('y', (d) => height)
			.attr('height', 0)
			.remove();
	}, [data]);

	return (
		<div className="chart">
			<svg ref={ref}></svg>
		</div>
	);
};

export default BarChartD;
