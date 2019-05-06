import React, { Component } from 'react';
import Styles from './ErrorMessage.scss';

const ErrorMessage = props => {
	//error message functionality

	let favorites;
	// let loading;

	if (props.favoriteCount === 0) {
		favorites = (
			<div>
				<h1>No Favorites Available</h1>
			</div>
		);
	}

	// if(){
	//     loading = (<div><h1>Loading....</h1></div>)
	// }

	return <div>{favorites}</div>;
	// {loading}
};

//ErrorMessage.propTypes = {
//functions

//}

export default ErrorMessage;
