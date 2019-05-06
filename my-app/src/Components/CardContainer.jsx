import React, { Component } from 'react';
import './CardContainer.scss';
import PropTypes from 'prop-types';
import ScrollText from './ScrollText';
import ErrorMessage from './ErrorMessage';
import Card from './Card';

const CardContainer = props => {
	let errorMessage;
	const cards = (
		<Card
			category={props.category}
			people={props.people}
			planets={props.planets}
			vehicles={props.vehicles}
			count={props.count}
			favoritesBtn={props.favoritesBtn}
			active={props.active}
		/>
	);

	if (props.category === null && props.count === 0) {
		errorMessage = <ErrorMessage />;
	}

	return (
		<main>
			{errorMessage}
			<ScrollText film={props.film} />
			{cards}
		</main>
	);
};

CardContainer.propTypes = {
	film: PropTypes.object,
	people: PropTypes.array,
	planets: PropTypes.array,
	vehicles: PropTypes.array,
	category: PropTypes.string,
	count: PropTypes.number,
	favoritesBtn: PropTypes.func,
	active: PropTypes.bool
};

export default CardContainer;
