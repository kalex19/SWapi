import React, { Component } from 'react';
import './CardContainer.scss';
import ScrollText from './ScrollText.js';
// import ErrorMessage from './ErrorMessage.js';
// import Card from './Card.js';

const CardContainer = props => {
	//functionality or conitional rendering?
	//possibly functionality to pick random film

	return (
		<main>
			<ScrollText film={props.film} />
			{/* //displayed
      while other data is loading ? ? goes away and cards are displayed 
      < /main>/
      if no favorites.... < ErrorMessage / >
      if people btn....create < Card people = {
        this.props.people
      }
      if planets btn....create < Card planets = {
        this.props.planets
      }
      if vehicles btn....create < Card vehicles = {
        this.props.vehicle
      } */}
		</main>
	);
};

// CardContainer.propTypes = {
//   film: PropTypes.object,
//   people: PropTypes.array,
//   planets: PropTypes.array,
//   vehicles: PropTypes.array,
//   //removeIdea: PropTypes.func
// }

export default CardContainer;
