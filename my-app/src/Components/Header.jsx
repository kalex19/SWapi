import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
	favoriteCount: PropTypes.number
};

export default Header;
