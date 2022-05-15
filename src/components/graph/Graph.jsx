import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import '../../styles/Graph.scss';

const Graph = () => {
	const randomArray = (length, max) =>
		[...new Array(length)].map(() => Math.round(Math.random() * max));

	const d3Ref = useRef(null);
	const [dataset, setDataset] = useState([
		100, 500, 200, 300, 400, 200, 400, 600, 400, 200,
	]);

	const changeData = (e) => {
		e.preventDefault();
		const data = randomArray(10, 500);
		setDataset(data);
	};

	useEffect(() => {
		const size = 500;
		const svg = d3
			.select(d3Ref.current)
			.append('svg')
			.attr('width', 1100)
			.attr('height', size);

		const rect_width = 95;
		svg
			.selectAll(`rect`)

			.data(dataset)
			.enter()
			.append(`rect`)
			.attr('x', (d, i) => 10 + i * (rect_width + 10))
			.attr('y', (d) => size - d)
			.transition()
			.duration(200)
			.attr(`width`, rect_width)
			.attr(`height`, (d) => d)
			.attr('fill', () => {
				return 'hsl(' + Math.random() * 480 + ',100%,50%)';
			});

		return () => {
			svg.remove('svg');
		};
	}, [dataset]);

	return (
		<div id="d3Graph" ref={d3Ref} className="graph">
			<button type="button" className="graph__button" onClick={changeData}>
				Randomize Data
			</button>
		</div>
	);
};

export default Graph;
