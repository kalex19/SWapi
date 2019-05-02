import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = props => {
	let people;
	let planets;
	let vehicles;
	let homeworld;
	let species;
	let population;
	let residents;

	function handleClick(e){
		e.preventDefault();
		console.log('still need to iterate favorite count and save favorites to array plus JSON and active class');
	}

	if (props.category === 'people') {
		people = (
			<div className="cardHeader">
				<button className="fab fa-rebel inactive" onClick={handleClick} />
				<h2>{props.people.name}</h2>
				<p>{homeworld}</p>
				<p>{species}</p>
				<p>{population}</p>
			</div>
		);
	}

	if (props.category === 'planets') {
		planets = (
			<div className="cardHeader">
				<button className="fab fa-rebel inactive" onClick={handleClick} />
				<h2>{props.planets.name}</h2>
				<p>{props.planets.terrain}</p>
				<p>{props.planets.population}</p>
				<p>{props.planets.climate}</p>
				<p>{residents}</p>
			</div>
		);
	}

	if (props.category === 'vehicles') {
		vehicles = (
			<div className="cardHeader">
				<button className="fab fa-rebel inactive" onClick={handleClick} />
				<h2>{props.vehicles.name}</h2>
				<p>{props.vehicles.model}</p>
				<p>{props.vehicles.vehicle_class}</p>
				<p>{props.vehicles.passengers}</p>
			</div>
		);
	}

	return (
		<div>
			{people} {planets} {vehicles}
		</div>
	);
};

export default Card;

// Card.propTypes = {
// 	people.name: PropTypes.string,
// 	people.homeworld: PropTypes.string,
// 	people.species: PropTypes.string,
// 	people.population: PropTypes.string,
// 	planets.name: PropTypes.string,
// 	planets.terrain: PropTypes.string,
// 	planets.population: PropTypes.string,
// 	planets.climate: PropTypes.string,
// 	vehicles.name: PropTypes.string,
// 	vehicles.model: PropTypes.string,
// 	vehicles.vehucle_class: PropTypes.string,
// 	vehicle.passengers: PropTypes.string
// };
