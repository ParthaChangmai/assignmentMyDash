import React from 'react';
import Calander from '../../Assets/Calander.webp';

const Leftimg = () => {
	return (
		<>
			<div className="calander">
				<img src={Calander} alt="home calander" />
				<div className="calander__text">
					<h3 className="calander__text--header">Choose a date</h3>
					<p className="calander__text--textOne">
						Lorem ipsum dolor sit amet consectetur, adipisicing
					</p>
					<p className="calander__text--textTwo">
						Nisi mollitia aliquid et, inventore, expedita temporibus
					</p>
				</div>
			</div>
		</>
	);
};

export default Leftimg;
