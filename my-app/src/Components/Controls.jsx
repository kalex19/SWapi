import React, { Component } from 'react';
import './Controls.scss';

const Controls = props => {
	// handlePeopleClick = e => {
	// 	e.preventDefault();
	// 	this.props.peopleBtn();
	// };

	// handlePlanetClick = e => {
	// 	e.preventDefault();
	// 	this.props.planetsBtn();
	// };

	// handleVehicleClick = e => {
	// 	e.preventDefault();
	// 	this.props.vehiclesBtn();
	// };

	//filter functionality

	return (
		<div>
			<input name="people" value="People" type="button" onClick={props.handleClick} />
			<input name="planets" value="Planets" type="button" onClick={props.handleClick} />
			<input name="vehicles" value="Vehicles" type="button" onClick={props.handleClick} />
		</div>
	);
};

export default Controls;

// Controls.proptypes = {
// 	//functionality
// };
