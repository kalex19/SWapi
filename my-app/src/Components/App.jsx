import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Controls from './Controls';
import CardContainer from './CardContainer';

export default class App extends Component {
	state = {
		category: null,
		results: [],
		favoriteCount: 0,
		favorites: []
	};
	//potentially move all state to comp and change app to func comp

	handleClick = e => {
		this.setState({ category: e.target.name }, () => {
			this.fetchResults();
		});
	};

	fetchResults = () => {
		let results = this.state.category;
		const resultsUrl = `https://swapi.co/api/${results}`;
		fetch(resultsUrl)
			.then(response => response.json())
			.then(results =>
				this.setState({ results: results.results }, () => {
					console.log(this.state.results);
				})
			)
			.catch(error => console.log(error));
	};

	// fetchHomeworld() {
	// 	const url = { homeworld };
	// 	fetch(url)
	// 		.then(response => response.json())
	// 		.then(results => console.log(results))
	// 		.catch(error => console.log(error));
	// }

	// fetchHomeworld() {
	// 	const url = { species };
	// 	fetch(url)
	// 		.then(response => response.json())
	// 		.then(results => console.log(results))
	// 		.catch(error => console.log(error));
	// }

	// fetchHomeworld() {
	// 	const url = { residents };
	// 	fetch(url)
	// 		.then(response => response.json())
	// 		.then(results => console.log(results))
	// 		.catch(error => console.log(error));
	// }

	//local storage

	render() {
		return (
			<div className="App">
				<Header favoriteCount={this.state.favoriteCount} />
				<Controls handleClick={this.handleClick} />
				<CardContainer results={this.state.results} category={this.state.category} count={this.state.favoriteCount} />
			</div>
		);
	}

	//proptypes
}
