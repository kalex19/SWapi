import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = props => {
	return (
		<div className="header">
			<h1 className="title"> SWapi-Box </h1>
			<p className="favBtn" role="button">
				View Favorites ({props.favoriteCount})
			</p>
		</div>
	);
};

Header.propTypes = {
	favoriteCount: PropTypes.number
};

export default Header;
