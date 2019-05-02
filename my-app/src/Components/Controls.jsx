import React, { Component } from 'react';
import './Controls.scss';

const Controls = props => {
	//filter functionality

	// const handleClick = ({ handleClick } = props);

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
