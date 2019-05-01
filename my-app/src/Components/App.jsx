import React, { Component } from 'react';
import './App.scss';
//import Header from './Header';
import Controls from './Controls';
import CardContainer from './CardContainer';

export default class App extends Component {
	state = {
		category: null,
		results: []
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
			.then(results => this.setState({ results: results.results }))
			.catch(error => console.log(error));
	};

	//local storage

	render() {
		return (
			<div className="App">
				{/* <Header /> */}
				<Controls handleClick={this.handleClick} />
				<CardContainer
					results={this.state.results}
					// favorites={this.favorites}
					// error={this.error}
				/>
			</div>
		);
	}

	//proptypes
}
