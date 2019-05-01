import React, { Component } from 'react';
import './Card.scss';

const Card = props => {
	//const....
	//favorite functionality

	return (
		//condoitional rendering depending on what props are passing through
		<div className="cardHeader">
			<h2>{props.info.name}</h2>
		</div>
	);
};

// Card.propTypes = {
// 	title: PropTypes.string,
// 	body: PropTypes.string,
// 	id: PropTypes.number,
// 	removeIdea: PropTypes.func
// };

export default Card;
