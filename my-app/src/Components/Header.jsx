import React, { Component } from 'react';
import './Header.scss';

const Header = props => {
	//favorite functionality

	let num = 6;
	return (
		<div>
			<h1> Star Wars </h1>
			<input type="button" className="viewFavorites" value="View Favorites" />
		</div>
	);
};
//proptypes

export default Header;
