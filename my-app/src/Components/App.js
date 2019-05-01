import React, { Component } from 'react';
import './App.scss';
// import Header from './Header.js';
// import Controls from './Control.js';
import CardContainer from './CardContainer.js';

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

	//local storage

	render() {
		return (
			<div className="App">
				{/* {<Header />
				<Controls people={this.people} planets={this.planets} vehicles={this.vehicles} /> */}
				<CardContainer
					film={this.state.film}
					// people={this.people}
					// planets={this.planets}
					// vehicles={this.vehicles}
					// favorites={this.favorites}
					// error={this.error}
				/>
			</div>
		);
	}

	//proptypes
}
