import React from 'react';

import '../../styles/Home.scss';
import Form from './Form';
import Leftimg from './Leftimg';

const Home = () => {
	return (
		<>
			<div className="home container">
				<Leftimg />
				<Form />
			</div>
		</>
	);
};

export default Home;
