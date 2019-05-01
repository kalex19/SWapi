import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ScrollText.scss';

export default class ScrollText extends Component {
	constructor() {
		super();
		this.state = {
			film: {}
		};
	}

	componentDidMount() {
		const range = 7;
		const num = Math.floor(Math.random() * Math.floor(range)) + 1;
		const filmUrl = `https://swapi.co/api/films/${num}`;
		fetch(filmUrl)
			.then(response => response.json())
			.then(film => this.setState({ film }))
			.catch(error => console.log(error));
	}

	render() {
		let scrollText = this.state.film.opening_crawl;
		let movieTitle = this.state.film.title;
		let movieReleaseDate = this.state.film.release_date;

		return (
			<div>
				<p>{scrollText}</p>
				<p>{movieTitle}</p>
				<p>{movieReleaseDate}</p>
			</div>
		);
	}
}

ScrollText.propTypes = {
	film: PropTypes.object
};
