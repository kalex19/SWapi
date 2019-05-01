import React, { Component } from 'react';
import './CardContainer.scss';
import ScrollText from './ScrollText';
//import ErrorMessage from './ErrorMessage';
import Card from './Card';

export default class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorites: [],
			error: true
		};
	}
	//functionality or conitional rendering?
	//possibly functionality to pick random film

	render() {
		const cards = this.props.results.map(result => <Card category={this.props.category} info={result} />);

		return (
			<main>
				<ScrollText film={this.props.film} />
				{/* displayed while other data is loading ? ? goes away and cards are displayed if no favorites.... */}
				{/* <ErrorMessage /> */}
				{cards}
			</main>
		);
	}
}

// CardContainer.propTypes = {
//   film: PropTypes.object,
//   people: PropTypes.array,
//   planets: PropTypes.array,
//   vehicles: PropTypes.array,
//   //removeIdea: PropTypes.func
// }
