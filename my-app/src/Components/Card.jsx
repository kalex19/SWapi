import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = props => {
	let person;
	let planet;
	let vehicle;
	let people = props.people;
	let planets = props.planets;
	let vehicles = props.vehicles;

	if (props.category === 'people') {
		personCard();
	}

	if (props.category === 'planets') {
		planetsCard();
	}

	if (props.category === 'vehicles') {
		vehiclesCard();
	}

	function personCard(){
		person = people.map(person => {
			return (
				<div className="cardHeader" key={person.name}>
					<button className="fab fa-rebel active" onClick={props.favoritesBtn} />
					<h2>{person.name}</h2>
					<p>{person.homeworld}</p>
					<p>{person.species}</p>
					<p>{person.population}</p>
				</div>
			);
		});
	}

	function planetsCard(){
		planet = planets.map(planet => {
			return (
				<div className="cardHeader" key={planet.name}>
					<button className="fab fa-rebel active" onClick={props.favoritesBtn} />
					<h2>{planet.name}</h2>
					<p>{planet.terrain}</p>
					<p>{planet.population}</p>
					<p>{planet.climate}</p>
					<p>{planet.residents}</p>
				</div>
			);
		});
	}

	function vehiclesCard(){
		vehicle = vehicles.map(vehicle => {
			return (
				<div className="cardHeader" key={vehicle.name}>
					<button className="fab fa-rebel active" role="button" onClick={props.favoritesBtn} />
					<h2>{vehicle.name}</h2>
					<p>{vehicle.model}</p>
					<p>{vehicle.vehicle_class}</p>
					<p>{vehicle.passengers}</p>
				</div>
			);
		});
	}

	return (
		<div className="cardContainer">
			{person} {planet} {vehicle}
		</div>
	);
};

Card.propTypes = {
	category: PropTypes.string,
	people: PropTypes.array,
	planets: PropTypes.array,
	vehicles: PropTypes.array,
	favoriotesBtn: PropTypes.func
};

export default Card;
