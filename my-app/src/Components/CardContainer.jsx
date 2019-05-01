import React, { Component } from 'react';
import './CardContainer.scss';
import ScrollText from './ScrollText';
import ErrorMessage from './ErrorMessage';
import Card from './Card';

export default class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorites: [],
			error: true
		};
	}

	render() {
		const cards = this.props.results.map(result => <Card category={this.props.category} info={result} />);

		return (
			<main>
				<ScrollText film={this.props.film} />
				<ErrorMessage status={this.props.error} favorites={this.state.favorites} />
				{cards}
			</main>
		);
	}
}

{
	/* displayed while other data is loading ? ? goes away and cards are displayed if no favorites.... */
}

// CardContainer.propTypes = {
//   film: PropTypes.object,
//   people: PropTypes.array,
//   planets: PropTypes.array,
//   vehicles: PropTypes.array,
//   //removeIdea: PropTypes.func
// }
