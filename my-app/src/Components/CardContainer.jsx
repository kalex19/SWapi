import React, { Component } from 'react';
import './CardContainer.scss';
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
		/>
	);

	if (props.count === 0) {
		errorMessage = <ErrorMessage />;
	}

	return (
		<main>
			<ScrollText film={props.film} />
			{errorMessage}
			{cards}
		</main>
	);
};

/* displayed while other data is loading ? ? goes away and cards are displayed if no favorites.... */

export default CardContainer;

// CardContainer.propTypes = {
//   film: PropTypes.object,
//   people: PropTypes.array,
//   planets: PropTypes.array,
//   vehicles: PropTypes.array,
//   //removeIdea: PropTypes.func
// }
