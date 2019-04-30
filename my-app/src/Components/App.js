import React, { Component } from 'react';
import './App.scss';
// import Header from './Header.js';
// import Controls from './Control.js';
// import CardContainer from './CardContainer.js';

export default class App extends Component {
	state = {
		film: {},
		people: [],
		planets: [],
		vehicles: [],
		Favorites: [],
		Error: true,
		Category: null
	};
	//potentially move all state to comp and change app to func comp

	componentDidMount() {
		const range = 7;
		const num = Math.floor(Math.random() * Math.floor(range)) + 1;
		const filmUrl = `https://swapi.co/api/films/${num}`;
		fetch(filmUrl)
			.then(response => response.json())
			.then(film =>
				this.setState({ film }, () => {
					console.log(this.state.film);
				})
			)
			.catch(error => console.log(error));
	}

	//local storage

	render() {
		return (
			<div className="App">
				{/* <Header />
				<Controls people={this.people} planets={this.planets} vehicles={this.vehicles} />
				<CardContainer
					people={this.people}
					planets={this.planets}
					vehicles={this.vehicles}
					favorites={this.favorites}
					error={this.error}
				/> */}
			</div>
		);
	}

	//proptypes
}
