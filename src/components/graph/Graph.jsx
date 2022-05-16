import React, { useState } from 'react';

import '../../styles/Graph.scss';
import BarChartD from './BarChartD';

const Graph = () => {
	const randomData = (length, max) =>
		[...new Array(length)].map(() => Math.round(Math.random() * max));

	const [data, setData] = useState([
		100, 500, 200, 300, 400, 200, 400, 600, 400, 200, 400, 200, 420, 650, 200,
	]);

	const changeData = (e) => {
		e.preventDefault();
		const data = randomData(15, 500);
		setData(data);
	};

	return (
		<div className="graph">
			<button type="button" className="graph__button" onClick={changeData}>
				Randomize Data
			</button>
			<BarChartD width={700} height={400} data={data} />
		</div>
	);
};

export default Graph;
