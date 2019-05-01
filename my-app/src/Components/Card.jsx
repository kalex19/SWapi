import React, { Component } from 'react';
import './Card.scss';

const Card = props => {
	let people;
	let planets;
	let vehicles;

	if (props.category === 'people') {
		people = (
			<div className="cardHeader">
				<h2>{props.info.name}</h2>
				<p>{props.info.homeworld}</p>
				<p>{props.info.species}</p>
			</div>
		);
	}

	if (props.category === 'planets') {
		planets = (
			<div className="cardHeader">
				<h2>{props.info.name}</h2>
				<p>{props.info.terrain}</p>
				<p>{props.info.population}</p>
				<p>{props.info.climate}</p>
				<p>{props.info.residents}</p>
			</div>
		);
	}

	if (props.category === 'vehicles') {
		vehicles = (
			<div className="cardHeader">
				<h2>{props.info.name}</h2>
				<p>{props.info.model}</p>
				<p>{props.info.class}</p>
				<p>{props.info.passengers}</p>
			</div>
		);
	}

	return (
		<div>
			{people} {planets} {vehicles}
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
