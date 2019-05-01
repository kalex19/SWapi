import React, { Component } from 'react';
import './Header.scss';

const Header = props => {
	//favorite functionality

	return (
		<div>
			<h1> Star Wars </h1>
			<p role="button">View {props.favoriteCount} Favorites</p>
		</div>
	);
};
//proptypes

export default Header;
