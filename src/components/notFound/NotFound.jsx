import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Error.scss';

const NotFound = () => {
	return (
		<>
			<div className="notfound ">
				<div className="notfound__heading">Opps !</div>
				<div className="notfound__text">404 PAGE NOT FOUND </div>
				<div className="notfound__button">
					<Link to="/" className="notfound__button--link">
						Back to home
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;
