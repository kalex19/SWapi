import React, { Component } from 'react';
import Styles from './ErrorMessage.scss';

const ErrorMessage = props => {
	// let loading;

	return (
		<div className="errorContainer">
			<h1>Please Select A Category</h1>
			<p>No Favorites Available</p>
		</div>
	);
};

//ErrorMessage.propTypes = {
//functions

//}

export default ErrorMessage;
