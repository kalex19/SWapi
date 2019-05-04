import React, { Component } from 'react';
import './CardContainer.scss';
import PropTypes from 'prop-types';
import ScrollText from './ScrollText';
import ErrorMessage from './ErrorMessage';
import Card from './Card';

const CardContainer = props => {
	function handleFavBtn(e){
		e.preventDefault();
		console.log('still need to iterate favorite count and save favorites to array plus JSON and active class');
		props.favoriteBtn(e.target.parentNode);
	}

	let errorMessage;
	const cards = (
		<Card
			category={props.category}
			people={props.people}
			planets={props.planets}
			vehicles={props.vehicles}
			count={props.count}
			favoritesBtn={handleFavBtn}
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

/* displayed while other data is loading ? ? goes away and cards are displayed if no favorites.... */

export default CardContainer;

CardContainer.propTypes = {
	film: PropTypes.object,
	people: PropTypes.array,
	planets: PropTypes.array,
	vehicles: PropTypes.array,
	category: PropTypes.string
};
