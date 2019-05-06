import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Controls from './Controls';
import CardContainer from './CardContainer';

export default class App extends Component {
	state = {
		category: null,
		people: [],
		planets: [],
		vehicles: [],
		favoriteCount: 0,
		favorites: []
	};
	//potentially move all state to comp and change app to func comp
	//fetch data for each p,p,v and then pass down arrays and manipulate arrays on card to get correct data, no need to fetch dynamically.

	handleClick = e => {
		this.setState({ category: e.target.name }, () => {
			this.fetchResults();
		});
	};

	fetchResults() {
		if (this.state.category === 'People') {
			this.fetchPeople();
		}
		if (this.state.category === 'Planets') {
			this.fetchPlanets();
		}
		if (this.state.category === 'Vehicles') {
			this.fetchVehicles();
		}
	}

	fetchPeople = () => {
		const url = `https://swapi.co/api/people`;
		fetch(url)
			.then(response => response.json())
			.then(results =>
				this.setState({ people: results.people }, () => {
					console.log(this.state.people);
				})
			)
			.catch(error => console.log(error));
	};

	fetchPlanets = () => {
		const url = `https://swapi.co/api/planet`;
		fetch(url)
			.then(response => response.json())
			.then(results =>
				this.setState({ planets: results.planet }, () => {
					console.log(this.state.planet);
				})
			)
			.catch(error => console.log(error));
	};

	fetchVehicles = () => {
		const url = `https://swapi.co/api/vehicles`;
		fetch(url)
			.then(response => response.json())
			.then(results =>
				this.setState({ vehicles: results.vehicles }, () => {
					console.log(this.state.vehicles);
				})
			)
			.catch(error => console.log(error));
	};
	//local storage

	render() {
		return (
			<div className="App">
				<Header favoriteCount={this.state.favoriteCount} />
				<Controls handleClick={this.handleClick} />
				<CardContainer
					results={this.state.results}
					category={this.state.category}
					count={this.state.favoriteCount}
					people={this.state.people}
					planets={this.state.planets}
					vehicles={this.state.vehicles}
				/>
			</div>
		);
	}

	//proptypes
}
