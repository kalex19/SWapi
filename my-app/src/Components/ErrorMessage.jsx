import React, { Component } from 'react';
import './ErrorMessage.scss';

const ErrorMessage = () => {
	return (
		<div className="errorContainer">
			<h1>Select A Category</h1>
			<p>No Favorites Available</p>
		</div>
	);
};

export default ErrorMessage;
