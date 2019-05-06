import React, { Component } from 'react';
import './Controls.scss';

const Controls = props => {
	//filter functionality

	return (
		<div className="controls">
			<input className="fas fa-jedi" name="people" value="People" type="button" onClick={props.handleClick} />
			<input className="fas fa-globe" name="planets" value="Planets" type="button" onClick={props.handleClick} />
			<input
				className="fas fa-space-shuttle"
				name="vehicles"
				value="Vehicles"
				type="button"
				onClick={props.handleClick}
			/>
		</div>
	);
};

export default Controls;

// Controls.proptypes = {
// 	//functionality
// };
