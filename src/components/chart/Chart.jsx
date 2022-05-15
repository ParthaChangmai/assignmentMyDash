import React, { useRef, useEffect, useReducer, useState } from 'react';
import * as d3 from 'd3';

const Chart = () => {
	const d3Ref = useRef(null);
	const dataset = [100, 200, 300, 400, 500];

	useEffect(() => {
		let size = 500;
		let svg = d3
			.select(d3Ref.current)
			.append('svg')
			.attr('width', size)
			.attr('height', size);

		let rect_width = 95;
		svg
			.selectAll(`rect`)
			.data(dataset)
			.enter()
			.append(`rect`)
			.attr('x', (d, i) => 5 + i * (rect_width + 5))
			.attr('y', (d) => size - d)
			.attr(`width`, rect_width)
			.attr(`height`, (d) => d)
			.attr('fill', () => {
				return 'hsl(' + Math.random() * 360 + ',100%,50%)';
			});

		return () => {
			svg.remove('svg');
		};
	}, []);

	return <div id="d3Graph" ref={d3Ref} className="graph"></div>;
};

export default Chart;
